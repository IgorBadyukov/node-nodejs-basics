import * as zlib from 'zlib';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileWay = path.join(__dirname, 'files/fileToCompress.txt');
const compressWay = path.join(__dirname, 'files/archive.gz');

const compress = async () => {
    const inp = fs.createReadStream(fileWay, 'utf8');
    const out = fs.createWriteStream(compressWay)
    const gzip = zlib.createGzip();
    inp.pipe(gzip).pipe(out);
};

await compress();
