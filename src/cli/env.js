import process from 'process';

const parseEnv = () => {
    const enviroment = process.env;
    const keysEnviroment = Object.keys(enviroment);
    keysEnviroment.forEach((key) => {
        if (key.toString().includes('RSS_')) {
            console.log(`${key}=${enviroment[key]}`);
        }
    })
};

parseEnv();
