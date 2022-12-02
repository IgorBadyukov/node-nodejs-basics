import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileWay = path.join(__dirname, 'files/fileToRemove.txt');

const remove = async () => {
    fs.stat(fileWay, (error, stats) => {
        if (error) {
            console.error('FS operation failed');
        }
        else {
            fs.unlink(fileWay, (error) => {
                if (error) {
                    console.error(error)
                }
            })
        }
    })
};

await remove();
