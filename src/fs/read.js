import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readFile = path.join(__dirname, 'files/fileToRead.txt');

const read = async () => {
    fs.stat(readFile, (error, stats) => {
        if (error) {
            console.error('FS operation failed');
        }
        else {
            const rs = fs.createReadStream(readFile);
            let data = '';
            rs.on('data', chunk => data += chunk.toString());
            rs.on('end', () => { console.log(data); });
        }
    })
};

await read();
