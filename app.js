import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

dotenv.config();



import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import loginRouter from './routes/login.js';

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


export default app;

