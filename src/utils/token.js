import { query } from '../lib/db.js';

async function tokenInDB(token) {
  const result = await query('SELECT token FROM tokens WHERE token = $1', [token]);
  if (result && result.rows.length > 0) return true;
  return false;
}

async function addTokenToDB(token) {
  if (!token) return null;
  const result = await query('INSERT INTO tokens(token) VALUES($1) RETURNING *', [token]);
  return result && result.rows.length > 0 ? result.rows[0] : null;
}

export { tokenInDB, addTokenToDB };
