import app from './app.js';


app.listen(process.env.PORT, () => {
  console.info(`Server running at http://localhost:${process.env.PORT}/`);
});
