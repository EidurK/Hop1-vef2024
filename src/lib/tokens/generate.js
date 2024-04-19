import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { getUserIdByAuth } from '../../utils/users.js';
import { addTokenToDB } from '../../utils/token.js';

const { env } = process;
const secretKey = env.TOKEN_SECRET ? env.TOKEN_SECRET : '';

export async function generateToken(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(401).json({ error: 'No username or password sent' });
    return;
  }

  const hashedPassword = crypto
    .createHash('sha256')
    .update(password)
    .digest('hex');

  const userID = await getUserIdByAuth(username, hashedPassword);

  if (!userID) {
    res.status(401).json({ error: 'Invalid username or password' });
    return;
  }

  const token = jwt.sign({ user_id: userID }, secretKey, { expiresIn: '14d' });

  if (!addTokenToDB(token)){
    res.status(500).json({ error: 'Database error' });
    return;
  }
  res.status(200).json({ token });
}
