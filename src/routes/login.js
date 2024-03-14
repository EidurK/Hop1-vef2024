import express from 'express';
import {end, query} from '../src/lib/db.js';
import jwt  from 'jsonwebtoken';
const{JWT_SECRET: secret_key } = process.env;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', async (req, res)=>{
  const{ email, password} =req.body;
  try{
    const queryText = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const response = await query(queryText, values);

    if (response.rows.length > 0) {
      const user = response.rows[0];
      if(user.password === password){
        const token = jwt.sign(
          { email: user.email, id: user.id },
          secret_key,
          { expiresIn: '1h' }
        );
        res.json({token});
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
