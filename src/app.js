import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import tasksRouter from './routes/tasks.js';
import authRouter from './routes/auth.js';
import photosRouter from './routes/photos.js';
import indexRouter from './routes/index.js';

const {env} = process;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(tasksRouter);
app.use(authRouter);
app.use(photosRouter);
app.use(indexRouter);

app.listen(env.PORT, () => {
  console.info(`Server running at http://localhost:${env.PORT}/`);
});

export default app;

