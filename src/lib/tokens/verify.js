import jwt from 'jsonwebtoken';
import { tokenInDB } from '../../utils/token.js';

const { env } = process;

const secretKey = env.TOKEN_SECRET ? env.TOKEN_SECRET : '';

export default async function tokenOwner(token) {
  try {
    const decodedToken = jwt.verify(token, secretKey);
    const {user_id: userID} = decodedToken;

    if (await tokenInDB(token)) return userID;
  } catch (err) {
    console.error(err);
  }
  return false;
}
