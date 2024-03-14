import express from 'express';
import { generateToken } from '../lib/tokens/generate.js';

const authRouter = express.Router();

authRouter.post('/login', generateToken);

export default authRouter;
