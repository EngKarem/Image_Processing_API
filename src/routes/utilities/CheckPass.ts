import fs from 'fs';
import sharp from 'sharp';
import { Response } from 'express';

// @ts-ignore
async function CheckPass(width:number, height:number, filename:string,res:Response):Promise{
  if (fs.existsSync(`Images/${filename}.png`)) {
    await sharp(`Images/${filename}.png`)
      .resize(width, height)
      .toFile(`thumb/${filename}_${width}_${height}.png`);

    res.sendFile(`${filename}_${width}_${height}.png` , { root: './thumb' });
  }
  else {
    res.send(`No Such File`);
  }
}

export default CheckPass;