import process from 'process';

const parseArgs = () => {
    console.log(process.argv);
    for (let i = 2; i < process.argv.length - 1; i += 2) {
        console.log(`${process.argv[i].slice(2)} is ${process.argv[i + 1]}`)
    }
};

parseArgs();
