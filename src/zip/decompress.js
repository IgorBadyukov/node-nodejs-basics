import * as zlib from 'zlib';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compressWay = path.join(__dirname, 'files/archive.gz');
const decompressWay = path.join(__dirname, 'files/fileToCompress.txt');

const decompress = async () => {
    const inp = fs.createReadStream(compressWay);
    const out = fs.createWriteStream(decompressWay)
    const unzip = zlib.createUnzip();
    inp.pipe(unzip).pipe(out);
};

await decompress();
