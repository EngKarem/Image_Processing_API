import express,{Request,Response} from 'express';
import CheckPass from '../utilities/CheckPass';
import fs from 'fs';
const images = express.Router();

if (!fs.existsSync('./thumb')){
  fs.mkdirSync('./thumb');
}

images.get('/', (req:Request, res:Response):void => {
  const width = req.query.width;
  const height = req.query.height;
  const filename = req.query.filename;
  if(width === "" || height === "")
  {
    res.send("Invalid Dimensions");
  }
  else if(fs.existsSync(`./thumb/${filename}_${width}_${height}.png`)){
    res.sendFile(`${filename}_${width}_${height}.png` , { root: './thumb' });
  }
  else {
    CheckPass(Number(width),Number(height),String(filename),res).then();
  }
});
//http://localhost:7000/api/Images/?width=200&height=200&filename=Image
export default images;
