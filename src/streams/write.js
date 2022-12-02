import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { stdin as input} from 'process';

const fileWay = path.join(__dirname, 'files/fileToWrite.txt')

const write = async () => {
    const ws = fs.createWriteStream(fileWay, 'utf-8');
    input.pipe(transform).pipe(output);
};

await write();
