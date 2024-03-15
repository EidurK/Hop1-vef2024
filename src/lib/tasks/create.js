import tokenOwner from '../tokens/verify.js';
import { createTaskInDb } from '../../utils/tasks.js';

export default async function createTask(req, res) {
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

  const { title } = req.body;
  if (!title) {
    res.status(400).json({ error: 'No title sent' });
    return;
  }
  const { description } = req.body;

  createTaskInDb(userID, title, description)
    .then(() => {
      res.status(201).json({ message: 'Task created' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error creating task' });
    });
}
