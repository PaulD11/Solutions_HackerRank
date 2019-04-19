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
    let split = String(c).split(',');

    for (let i = 0; i < split.length; i++){
        if (split[i] == 0) {
            split[i] = i;
        } else {
            split[i] = false;
        }
    }

    for (let i = 0; i < split.length; i++) {
        if (split[i] == false) {
            split.splice(i, 1);
        }
    }
    split.unshift(0);

    for (let i = 0; i < split.length -1; i++) {
        if (split[i] + 2 == split[i + 2]) {
            split.splice(i + 1, 1);
        }
    }

    return split.length -1;
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
