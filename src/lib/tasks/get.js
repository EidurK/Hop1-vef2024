import tokenOwner from '../tokens/verify.js';
import { userTasks } from '../../utils/tasks.js';

export default async function getTasks(req, res) {
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

    const tasks = await userTasks(userID);

    res.status(200).json(tasks);
}
