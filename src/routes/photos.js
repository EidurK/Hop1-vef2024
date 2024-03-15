import express from 'express';
import addPhoto from '../lib/photos/add.js';
import getPhotos from '../lib/photos/get.js';

const photosRouter = express.Router();

photosRouter.post('/photos', addPhoto);
photosRouter.get('/photos', getPhotos);

export default photosRouter;
