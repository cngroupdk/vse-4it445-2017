import { Router } from 'express';

import contactRoutes from './modules/contacts/routes';
import productRoutes from './modules/products/routes';
import contactRequestRoutes from './modules/contact-request/routes';

const router = Router();

router.use('/contacts', contactRoutes);
router.use('/products', productRoutes);
router.use('/contact-reqest', contactRequestRoutes);

export default router;
