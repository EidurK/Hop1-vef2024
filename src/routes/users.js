import express from 'express';
import { query } from '../src/lib/db.js';
import jwt from 'jsonwebtoken';

const { JWT_SECRET: secret_key } = process.env;
var router = express.Router();

// Signup routes
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const queryText = `INSERT INTO users(email, name, password) VALUES($1, $2, $3) RETURNING *`;
    const values = [email, username, password];
    const response = await query(queryText, values);

    console.info(`New User created: ${email}, ${username}, ${password}`);
    res.status(201).send(response.rows[0]);
  } catch (error) {
    console.error('Error creating user', error);
    res.status(500).send('Server error');
  }
});

// Login routes
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const queryText = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const response = await query(queryText, values);

    if (response.rows.length > 0) {
      const user = response.rows[0];
      if (user.password === password) {
        const token = jwt.sign(
          { email: user.email, id: user.id },
          secret_key,
          { expiresIn: '1h' }
        );
        res.json({ token });
      } else {
        res.redirect('/login');
      }
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error finding user', error);
    res.status(500).send('Server error');
  }
});

export default router;
