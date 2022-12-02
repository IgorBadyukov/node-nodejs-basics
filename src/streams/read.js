import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { stdout as output} from 'process';

const fileWay = path.join(__dirname, 'files/fileToRead.txt')

const read = async () => {
    rs.pipe(output);
};

await read();
