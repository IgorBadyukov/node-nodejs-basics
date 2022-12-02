import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileWay = path.join(__dirname, 'files/wrongFilename.txt');
const newFileWay = path.join(__dirname, 'files/properFilename.md');

const rename = async () => {
   fs.access(fileWay, function(error){
      if (error) {
         console.error('FS operation failed');
      } else {
         fs.access(newFileWay, function(error){
            if (error) {
               fs.rename(fileWay, newFileWay, (err) => {
                  if (err) {
                     console.error(err);
                  }
               });
            } else {
               console.error('FS operation failed');
            }
         });
      }
   });

};

await rename();
