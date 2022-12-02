import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderDir = path.join(__dirname, 'files')
const copyDir = path.join(__dirname, 'files_copy')

const copy = async () => {
    try {
        fs.access(copyDir, function(error){
            if (error) {
                copyFolder();
            } else {
                console.error('FS operation failed');
            }
        });
    } catch (err) {
        console.error('FS operation failed')
    }
};

async function copyFolder() {
    try {
        fs.mkdir(copyDir, {recursive: true}, (err)=>{
            if (err){
                console.log(err);
            }
        })
        const files = await fs.promises.readdir(folderDir, {withFileTypes: true});
        for (let file of files) {
            fs.copyFile(path.join(folderDir, file.name), path.join(copyDir, file.name), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    } catch (err) {
        console.error('FS operation failed')
    }
}

await copy();
