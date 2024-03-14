import { query } from '../lib/db.js';

async function token_in_db(token) {
  const result = await query('SELECT token FROM tokens WHERE token = $1', [token]);
  return result && result.rows.length > 0;
}

async function add_token_to_db(token) {
  const result = await query('INSERT INTO tokens(token) VALUES($1) RETURNING *', [token]);
  return result && result.rows.length > 0 ? result.rows[0] : null;
}

export { token_in_db, add_token_to_db };
