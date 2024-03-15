import { query } from '../lib/db.js';

async function createTaskInDb(userID, title, description ) {
  const result = await query(
    'INSERT INTO tasks(user_id, title, description) VALUES($1, $2, $3) RETURNING *',
    [userID, title, description]);
  return result && result.rows.length > 0 ? result.rows[0] : null;
}

async function userTasks(userID) {
  const result = await query('SELECT * FROM tasks WHERE user_id = $1', [userID]);
  return result ? result.rows : [];
}

async function updateTaskInDb(id, userID, title, description) {
  let queryStr = 'UPDATE tasks SET ';
  const queryParams = [];
  let paramIndex = 1;

  if (title !== undefined && title !== null) {
    queryStr += `title = $${paramIndex}, `;
    queryParams.push(title);
    paramIndex += 1;
  }

  if (description !== undefined && description !== null) {
    queryStr += `description = $${paramIndex}, `;
    queryParams.push(description);
    paramIndex += 1;
  }

  queryStr = queryStr.slice(0, -2);

  queryStr += ` WHERE id = $${paramIndex} AND user_id = $${paramIndex + 1} RETURNING *`;
  queryParams.push(id, userID);

  const result = await query(queryStr, queryParams);
  return result && result.rows.length > 0;
}

async function deleteTaskInDb(id, userID) {
  const result = await query('DELETE FROM tasks WHERE id = $1 AND user_id = $2', [id, userID]);
  return result && result.rowCount > 0;
}

export { createTaskInDb, userTasks, updateTaskInDb, deleteTaskInDb };
