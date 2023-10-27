const { exec } = require('child_process');
const process = require('process');

const fileName = process.argv[2];

exec(
    `tsc && yarn jest ${fileName + ".test.ts"} --colors && node ${"js-generated/" + fileName + ".js"} --colors`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    }
);