import { Testimonios } from '../models/Testimonios.js';

const guardarTestimonio = async(req, res) => {
    // Validar el Formulario
    const { nombre, email, mensaje } = req.body;

    const errores = [];

    if( nombre.trim() === ''){
        errores.push( {mensaje: 'El campo nombre está vacío'} );
    };

    if( email.trim() === ''){
        errores.push( {mensaje: 'El campo email está vacío'} );
    };

    if( mensaje.trim() === ''){
        errores.push( {mensaje: 'El campo mensaje está vacío'} );
    };

    if( errores.length > 0){

        // Consultar la base de datos y traer los testimonios
        const testimonios = await Testimonios.findAll();

        // Mostramos el render de la vista
        res.render('testimonios', {
            pagina: 'testimonios',
            errores,
            nombre,
            email,
            mensaje,
            testimonios
        });

    } else {
        // Almacenarlosen la base de datos
        try {

            // Almacenamos los datos en DB 
            await Testimonios.create({
                nombre,
                email,
                mensaje
            });
            
            // Redireccionar al usuario a testimonios
            res.redirect('/testimonios');
        } catch (error) {
            console.log(error);
        }
    };
}

export {
    guardarTestimonio
}