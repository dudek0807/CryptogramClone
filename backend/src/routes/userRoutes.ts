import express from 'express';
import { registerUser, loginUser, getMe } from '../controllers/userController';
import authenticate from '../middleware/auth';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', authenticate, getMe);

export default router;