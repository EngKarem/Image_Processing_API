import express,{Request,Response} from 'express';
import morgan from 'morgan';
import routes from './routes';

const port = 7000;

const app = express();

app.use('/api', routes);

app.use(morgan('common'));

app.use((_req:Request,res:Response):void=>{
  res.status(404).json({
    message: 'Invalid Url'
  })
})

app.listen(port, () :void=> {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
