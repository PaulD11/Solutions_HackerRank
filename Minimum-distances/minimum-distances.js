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

function minimumDistances(a) {
    let minimum = a.length;
    let distance = 0;
    let matchesOnce = false;

    for (let i = 0; i < a.length; i++){
        for (let j = 0; j < a.length; j++){
            distance = Math.abs(i - j);
            if (a[i] == a[j] && i != j) {
                if (distance > 0 && minimum > distance) {
                    minimum = distance;
                    matchesOnce = true;
                }
            }
        }
    }
    return !matchesOnce ? -1 : minimum;
}

//################### SOLUTION #############################

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = minimumDistances(a);

    ws.write(result + "\n");

    ws.end();
}
