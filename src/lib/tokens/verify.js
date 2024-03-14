import jwt from 'jsonwebtoken';

const { env } = process;

const secretKey = env.TOKEN_SECRET ? env.TOKEN_SECRET : '';

export default async function tokenOwner(token) {
  try {
    const decoded_token = jwt.verify(token, secretKey);
    const user_id = decoded_token.user_id;

    // if (token_in_db(token)) return user_id;
    if (true) return user_id;
  } catch (err) {
    console.error(err);
  }
  return false;
}
