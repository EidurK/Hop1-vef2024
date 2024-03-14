import express from 'express';
import {end, query} from '../src/lib/db.js';
var router = express.Router();

router.get('/', (req, res) => {
  const userTasks = [];
  
    res.render('home', { tasks: userTasks });
});

export default router;
