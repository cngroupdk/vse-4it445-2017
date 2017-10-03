import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { productsController } from './productController';

const router = expressAsyncAwait(Router());
router.get('/', productsController);

export default router;
