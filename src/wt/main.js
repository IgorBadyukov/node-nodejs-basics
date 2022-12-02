import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import os from 'os';
const numCPUs = os.cpus().length;
const fileWay = path.join(__dirname, 'worker.js');
import { Worker, workerData } from 'worker_threads';

const performCalculations = async () => {
    let promiseArr = [];
    for (let i = 0; i < numCPUs; i++ ) {
        promiseArr.push(new Promise((resolve, reject) => {
            const worker = new Worker(fileWay, {workerData: i + 10});
            worker.on('message', msg =>  {
                resolve({status: 'resolve', data: msg})
            });
            worker.on('error', err =>  {
                resolve({status: 'error', data: null})
            });
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject(new Error(`Worker stopped with exit code ${code}`));
            });
        }))
    }
    console.log(await Promise.all(promiseArr));
};

await performCalculations();
