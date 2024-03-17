import express from 'express';

const indexRouter = express.Router();

const allRoutes = (req, res) => {
  const returningString =
    'Welcome to the API\n' +
    'The following are the routes available:\n' +
    '-----------------------------------------------------------------------------------\n' +
    'The following do not require any authorization\n\n' +
    'POST /login (username and password in body, returned jwt token should be copied and used)\n' +
    'POST /photos (photo_url in body, store the id you get returned) \n' +
    'GET /photos?public_id=... (set query param public_id as public_id from post /photos)\n' +
    '-----------------------------------------------------------------------------------\n' +
    'The following must have a valid jwt token in the Authorization header as bearer token\n\n' +
    'POST /tasks (body must include title with the possibility of description as well)\n' +
    'GET /tasks (returns all tasks)\n' +
    'PATCH /tasks (body must include id and can include title and or description)\n' +
    'DELETE /tasks (body must include id)\n';
  res.status(200).send(returningString);
};

indexRouter.get('/', allRoutes);

export default indexRouter;
