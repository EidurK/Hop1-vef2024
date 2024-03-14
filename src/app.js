import dotenv from 'dotenv/config';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from '../routes/index.js';
import usersRouter from '../routes/users.js';
import loginRouter from '../routes/login.js';
import signupRouter from '../routes/signup.js';
import homeRouter from '../routes/home.js';

var app = express();

app.set('view engine', 'ejs')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/home', homeRouter);


export default app;
