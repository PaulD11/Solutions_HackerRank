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

function beautifulDays(i, j, k) {
    let counter = 0;
    let reverse = 0;
    for (let x = 0; x <= j - i; x++){
        reverse = parseInt(String(i + x).split('').reverse().join(''));
        if (Math.abs(i +x - reverse) % k == 0) {
            counter++;
        }
    }

    return counter;
}

//################### SOLUTION #############################

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ijk = readLine().split(' ');

    const i = parseInt(ijk[0], 10);

    const j = parseInt(ijk[1], 10);

    const k = parseInt(ijk[2], 10);

    let result = beautifulDays(i, j, k);

    ws.write(result + "\n");

    ws.end();
}
