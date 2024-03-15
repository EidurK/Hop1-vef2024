import tokenOwner from '../tokens/verify.js';
import { updateTaskInDb } from '../../utils/tasks.js';

export default async function updateTask(req, res) {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    res.status(401).json({ error: 'No token sent' });
    return;
  }
  const token = bearerToken.replace('Bearer ', '');

  const userID = await tokenOwner(token);
  if (!userID) {
    res.status(401).json({ error: 'Invalid token' });
    return;
  }

  const { id } = req.body;
  if (!id) {
    res.status(400).json({ error: 'No id sent' });
    return;
  }

  const { title, description } = req.body;

  updateTaskInDb(id, userID, title, description)
    .then(() => {
      res.status(201).json({ message: 'Task Updated' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error updating task' });
    });
}
