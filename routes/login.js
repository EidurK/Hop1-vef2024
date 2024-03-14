import express from 'express';
import {end, query} from '../src/lib/db.js';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', async (req, res)=>{
  const{ email, password} =req.body;
  try{
 const queryText = 'SELECT password FROM users WHERE email = $1';
    const values = [email];
    const response = await query(queryText, values);
    if (response.rows.length > 0) {
      const Submittedpassword = response.rows[0].password;
      if(Submittedpassword == password){
        res.redirect('/home');
      }else{
        res.redirect('/');
      }
    } else {
      res.status(404).send('User not found');
    }
  }catch(error){
    console.error('Error finding user', error);
    res.status(500).send('Server error');
  }
})

export default router;
