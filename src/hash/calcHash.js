import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileWay = path.join(__dirname, 'files/fileToCalculateHashFor.txt')

const calculateHash = async () => {
    const rs = fs.createReadStream(fileWay, 'utf8');
    let data = '';
    rs.on('data', chunk => data += chunk.toString());
    rs.on('end', () => {
        let hash = crypto.createHash('md5').update(data).digest('hex');
        console.log(hash);
    });
};

await calculateHash();
