import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

const app = express();

//Conectar a la DB
db.authenticate()
    .then( () => console.log('Base de Datos conectada correctamente') )
    .catch( error => console.log(error) );

// Habilitar Pug
app.set('view engine', 'pug');

// Crear un middleware obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    next();
})

// Configurar carpeta public
app.use(express.static('public'));

// Agregar Body Parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Agregar Router
app.use('/', router);

// Puerto y host para la app
const host = process.env.HOST || '0.0.0.0'; 
const port  = process.env.PORT || 4000;

app.listen( port , host, () => {
    console.log('El servidor está funcionando correctamente');
});