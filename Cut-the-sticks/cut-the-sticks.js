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

function cutTheSticks(arr) {
    arr = arr.sort();
    let sticksCut = [];
    let min = 0;

    while (arr.length > 0) {
        sticksCut.push(arr.length);
        min = Math.min(...arr);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] - min;
            if (arr[i] == 0) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return sticksCut;
}

//################### SOLUTION #############################

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = cutTheSticks(arr);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
