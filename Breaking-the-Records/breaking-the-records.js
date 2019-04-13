'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


//################### SOLUTION #############################

function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    let maximum = 0;
    let minMax = 0;


    for (let i = 0; i < scores.length; i++){
        if (scores[i] < min) {
            minMax++;
            min = scores[i];
        }
        
        if (scores[i] > max) {
            maximum++;
            max = scores[i];
        }
    }
    return [maximum, minMax]
}

//################### SOLUTION #############################

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
