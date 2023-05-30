import express from 'express';
import { login, register } from '../controllers/auth.js'
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/login',login);

export default router;