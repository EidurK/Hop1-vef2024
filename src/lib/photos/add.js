import {v2 as cloudinary} from 'cloudinary';

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

export default async function addPhoto(req, res) {
    const { photo_url: photoURL } = req.body;
    if (!photoURL) {
        res.status(400).send('No photo url');
        return;
    }
    cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
    });

    const publicID = Math.random().toString(36).substring(2, 18);

    cloudinary.uploader.upload(photoURL, { public_id: publicID }, () => {});

    res.status(200).send({ public_id: publicID});
}
