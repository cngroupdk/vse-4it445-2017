import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  postContactRequestController,
} from './postContactRequestController.js';

const router = expressAsyncAwait(Router());
router.post('/', postContactRequestController);

export default router;
