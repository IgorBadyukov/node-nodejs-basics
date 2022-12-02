import { stdin as input, stdout as output} from 'process';
import {Transform} from 'stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, env, cb) {
            const newChunk = chunk.toString().split('').reverse().join('');
            cb(null, newChunk);
        }
    })
    input.pipe(reverse).pipe(output);
};

await transform();
