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

function viralAdvertising(n) {
    let liked = 2;
    let shared = 6;
    let cumulative = 2;
    
    for (let i = 1; i < n; i++){
        shared = liked * 3;
        liked = Math.floor(shared / 2);
        cumulative = cumulative + liked;
    } 
    return cumulative;
}

//################### SOLUTION #############################

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = viralAdvertising(n);

    ws.write(result + "\n");

    ws.end();
}
