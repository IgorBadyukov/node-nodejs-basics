import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const args = process.argv.slice(2);
const fileWay = path.join(__dirname, 'files/script.js');

export const spawnChildProcess = async (args, src) => {
    fork(src, args);
};

spawnChildProcess(args, fileWay)
