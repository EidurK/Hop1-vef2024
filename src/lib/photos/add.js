import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import fs from 'fs';

const upload = multer({ dest: 'uploads/' });

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

export default async function addPhoto(req, res) {
  upload.single('photo')(req, res, async function (err) {
    if (err) {
      return res.status(500).send(err);
    }

    if (!req.file) {
      return res.status(400).send('No photo uploaded');
    }

    cloudinary.config({
      cloud_name: CLOUDINARY_CLOUD_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
    });

    const publicID = Math.random().toString(36).substring(2, 18);

    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        public_id: publicID,
      });
      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        }
      });
      res.status(200).send({ public_id: result.public_id });
    } catch (error) {
      res.status(500).send(error);
    }
  });
}
