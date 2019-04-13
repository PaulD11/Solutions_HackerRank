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

function divisibleSumPairs(n, k, ar) {
    let counter = 0;
    let pos = 0;

    while (pos < n - 1) {   
        for (let i = 1; i < ar.length; i++){
            if (pos != i && pos < i) {    
                if ((ar[pos] + ar[i]) % k == 0) {
                console.log(ar[pos], ar[i]);
                    counter++;
                }
            }
        }
        pos++;
    }
    return counter;
}

//################### SOLUTION #############################

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = divisibleSumPairs(n, k, ar);

    ws.write(result + "\n");

    ws.end();
}
