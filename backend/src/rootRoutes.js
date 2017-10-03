import { Router } from 'express';

import contactRoutes from './modules/contacts/routes';

const router = Router();

router.use('/contacts', contactRoutes);

export default router;
