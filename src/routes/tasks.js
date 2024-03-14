import express from 'express';
import createTask from '../lib/tasks/create.js';
import updateTask from '../lib/tasks/update.js';
import deleteTask from '../lib/tasks/delete.js';
import getTasks from '../lib/tasks/get.js';

const tasksRouter = express.Router();

tasksRouter.post('/tasks', createTask);
tasksRouter.patch('/tasks', updateTask);
tasksRouter.delete('/tasks', deleteTask);
tasksRouter.get('/tasks', getTasks);

export default tasksRouter;
