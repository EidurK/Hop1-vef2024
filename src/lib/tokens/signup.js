import crypto from 'crypto';
import { createUser, doesUserAlreadyExist } from '../../utils/users.js';

export async function signUp(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(401).json({ error: 'No username or password sent' });
    return;
  }

  const hashedPassword = crypto
    .createHash('sha256')
    .update(password)
    .digest('hex');

  const userID = await createUser(username, hashedPassword);
  if (!userID) {
    res.status(401).json({ error: 'Invalid username or password' });
    return;
  }

res.status(200).json({ message: 'User created' });

}
