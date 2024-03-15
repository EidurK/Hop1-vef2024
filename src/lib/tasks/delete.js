import tokenOwner from '../tokens/verify.js';
import { deleteTaskInDb } from '../../utils/tasks.js';

export default async function deleteTask(req, res) {
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

  deleteTaskInDb(id, userID);

  res.status(200).json({ message: 'Task Deleted' });
}
