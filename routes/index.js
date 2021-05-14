import express from 'express';
import { paginaInicio, 
        paginaNosotros, 
        paginaViajes, 
        paginaTestimonios, 
        detalleViaje} 
from '../controllers/paginas-controller.js';
import { guardarTestimonio } from '../controllers/testimonios-controller.js';

//Configurar las rutas
const router = express.Router();


router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', detalleViaje);

router.get('/testimonios', paginaTestimonios);

router.post('/testimonios', guardarTestimonio);

export default router;