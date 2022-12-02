import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderDir = path.join(__dirname, 'files');


const list = async () => {
    fs.stat(folderDir, (error, stats) => {
        if (error) {
            console.error('FS operation failed');
        }
        else {
            (async function searchFiles() {
                const allFiles = await fs.promises.readdir(folderDir, {withFileTypes: true});
                for (let file of allFiles) {
                    const extensionName = path.extname(path.join(folderDir, file.name));
                    const fileName = path.basename(path.join(folderDir, file.name), extensionName);
                    console.log(fileName);
                }
            })();
        }
    })
};

await list();
