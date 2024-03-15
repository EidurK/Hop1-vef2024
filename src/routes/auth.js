import express from 'express';
import { generateToken } from '../lib/tokens/generate.js';
import { signUp } from '../lib/tokens/signup.js';

const authRouter = express.Router();

authRouter.post('/login', generateToken);
authRouter.post('/signup', signUp);

export default authRouter;
