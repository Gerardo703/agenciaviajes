import { Viaje } from '../models/Viaje.js';
import { Testimonios } from '../models/Testimonios.js';
 
const paginaInicio = async(req, res) => { // req => lo que enviamos // res => lo que express nos responde

    // Consultar tres viajes al modelo viajes

    const promiseDB = []; 
    promiseDB.push( Viaje.findAll( { limit: 3} ));
    promiseDB.push( Testimonios.findAll( { limit: 3} ));

    try {
        
        const resultado = await Promise.all( promiseDB );

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimonios: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
   
};

const paginaNosotros = (req, res) => { // req => lo que enviamos // res => lo que express nos responde

    res.render('nosotros',{
        pagina: 'Nosotros'
    });
};

const paginaViajes =  async(req, res) => { // req => lo que enviamos // res => lo que express nos responde

    // Consultar la base de datos
    const viajes = await Viaje.findAll();
    

    res.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes
    });
};

const paginaTestimonios = async(req, res) => { // req => lo que enviamos // res => lo que express nos responde

    try {

        // Consultar la base de datos y traer los testimonios
        const testimonios = await Testimonios.findAll();
        res.render('testimonios',{
            pagina: 'Testimonios',
            testimonios
        });
        
    } catch (error) {
        console.log(error);
    }
    
};

// Muestra el viaje según Slug
const detalleViaje = async(req, res) => {

    const { slug } = req.params;

    try {
        const resultado = await Viaje.findOne({ where : {slug} });

        res.render('viaje', {
            pagina: 'Información del Viaje',
            resultado
        })
    } catch (error) {
        console.log(error);
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    detalleViaje
};