import { query } from '../lib/db.js';

async function get_userid_by_auth(username, password) {
  const result = await query('SELECT id FROM users WHERE username = $1 AND password = $2', [username, password]);
  return result && result.rows.length > 0 ? result.rows[0].id : null;
}

export { get_userid_by_auth };
