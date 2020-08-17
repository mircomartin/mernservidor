const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// crea el servidor
const app = express();

//conectar db
conectarDB()

//habilitar cors
app.use(cors({ credentials: true, origin: 'https://secret-tundra-72255.herokuapp.com/' }));
app.options("*", cors());

//habilitar express jason
app.use(express.json({extended: true}))

// puerto de la app 
const port = process.env.PORT || 4000;

//conectar rutas
app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/proyectos', require('./routes/proyectos'))
app.use('/api/tareas', require('./routes/tareas'));

//arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})