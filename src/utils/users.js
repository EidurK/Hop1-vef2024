import { query } from '../lib/db.js';

async function getUserIdByAuth(username, password) {
  const result = await query('SELECT id FROM users WHERE username = $1 AND password = $2',
   [username, password]);
  if (!result) {
    return null;
  }
  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0].id;
}

async function createUser(username, password) {
  const result = await query('INSERT INTO users(username, password) VALUES($1, $2) RETURNING id',
    [username, password]);
  if (!result) {
    return null;
  }
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0].id;
}

async function doesUserAlreadyExist(username){
  const result = await query('SELECT * FROM users WHERE username = $1;', [username]);
  if (result.rows.length === 0) {
    return false;
  }
  return true;

}

export { getUserIdByAuth, createUser, doesUserAlreadyExist };
