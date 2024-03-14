import express from 'express';
import indexRouter from './routes/index.js';
import tasksRouter from './routes/tasks.js';
import authRouter from './routes/auth.js';

const { env } = process;
if (!env) {
  process.exit(1);
}

const app = express();
app.use(express.json());

app.use(tasksRouter);
app.use(authRouter);

app.listen(env.PORT, () => {
  console.info(`Server running at http://localhost:${env.PORT}/`);
});
