'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

//################### SOLUTION #############################

function jumpingOnClouds(c) {
    let splittedC = String(c).split(',');

    for (let i = 0; i < splittedC.length; i++){
        if (splittedC[i] == 0) {
            splittedC[i] = i;
        } else {
            splittedC[i] = false;
        }
    }
    for (let i = 0; i < splittedC.length; i++) {
        if (splittedC[i] === false) {
            splittedC.splice(i, 1);
        }
        if (splittedC[i] + 2 == splittedC[i + 2]) {
            splittedC.splice(i + 1, 1);
        }
    }

    return splittedC.length -1;
}

//################### SOLUTION #############################

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
