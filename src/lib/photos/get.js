import {v2 as cloudinary} from 'cloudinary';

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

export default async function getPhotos(req, res) {       
    const {public_id: publicId} = req.query;
    if (!publicId) {
        res.status(400).send('No public id');
        return;
    }
    cloudinary.config({ 
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
    });
    
    const result = await cloudinary.search.expression(`public_id:${ publicId}`).execute();
    if (result.resources.length === 0){
        res.status(404).send('Photo not found');
        return;
    } 
    const resouces = result.resources;
    const {url} = resouces[0];
    
    res.status(200).send({ url });
}