import express from 'express';
import {
  query
} from '../src/lib/db.js'
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('signup');
});

router.post('/', async (req, res)=>{
  const{email, username, password} = req.body;
  try{
    const queryText = `INSERT INTO users(email, name, password) VALUES($1, $2, $3) RETURNING *`;
    const values = [email, username, password];
    const response = await query(queryText,values);

  console.info(`New User created: ${email}, ${username}, ${password}`);
    res.status(201).send(response.rows[0]);
  }catch (error){
    console.error('Error creating user', error);
    res.status(500).send('Server error');
  }
})

export default router;
