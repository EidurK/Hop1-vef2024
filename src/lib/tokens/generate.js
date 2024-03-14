import jwt from 'jsonwebtoken';
import crypto from 'crypto';

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

  const userID = get_userid_by_auth(username, hashedPassword);

  if (!userID) {
    res.status(401).json({ error: 'Invalid username or password' });
    return;
  }

  const token = jwt.sign({ user_id: userID }, secretKey, { expiresIn: '1h' });

  add_token_to_db(token);
  res.status(200).json({ token });
}
