import { Router } from 'express';

import helloRoutes from './modules/hello/routes';

const router = Router();

router.use('/hello', helloRoutes);

export default router;
