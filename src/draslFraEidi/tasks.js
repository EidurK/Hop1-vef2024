import { query } from '../lib/db.js';

async function createTaskInDb(userID, title, description, due_date, status) {
  const result = await query('INSERT INTO tasks(user_id, title, description, due_date, status) VALUES($1, $2, $3, $4, $5) RETURNING *', [userID, title, description, due_date, status]);
  return result && result.rows.length > 0 ? result.rows[0] : null;
}

async function getTasks(userID) {
  const result = await query('SELECT * FROM tasks WHERE user_id = $1', [userID]);
  return result ? result.rows : [];
}

async function updateTaskInDb(id, userID, title, description, due_date, status) {
  const result = await query('UPDATE tasks SET title = $3, description = $4, due_date = $5, status = $6 WHERE id = $1 AND user_id = $2 RETURNING *', [id, userID, title, description, due_date, status]);
  return result && result.rows.length > 0;
}

async function deleteTaskInDb(id, userID) {
  const result = await query('DELETE FROM tasks WHERE id = $1 AND user_id = $2', [id, userID]);
  return result && result.rowCount > 0;
}

export { createTaskInDb, getTasks, updateTaskInDb, deleteTaskInDb };
