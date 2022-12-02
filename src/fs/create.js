import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileWay = path.join(__dirname, 'files/fresh.txt');


const create = async () => {
    fs.access(fileWay, function(error){
        if (error) {
            fs.writeFile(fileWay, 'I am fresh and young', function(err) {
                if (err) {
                    console.error(err);
                }
            });
        } else {
            console.error('FS operation failed');
        }
    });
};

await create();
