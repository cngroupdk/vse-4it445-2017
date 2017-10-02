import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { someIdController } from './controllers/someIdController';
import { worldController } from './controllers/worldController.js';

const router = expressAsyncAwait(Router());
router.get('/world', worldController);
router.get('/:someId', someIdController);

export default router;
