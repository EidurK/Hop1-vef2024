import express from 'express';
import {query} from '../src/lib/db.js'

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  userRoute();
  res.render('index', { title: 'Express' });
});

async function userRoute(req, res){
  const user = await query('SELECT name FROM users');
  console.log(user)

}

async function tasksRoute(req, res){
  const tasks = await query('SELECT * FROM users');
  console.log(tasks);

}

export default router;
