import express, {Request,Response}from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (req:Request, res:Response) :void=> {
  res.send('main api routes');
});

routes.use('/Images', images);

export default routes;
