'use strict';

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

function plusMinus(arr) {
    let counter = 0;
    let counter1 = 0;
    let counter2 = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            counter++;
        } else if (arr[i] < 0) {
            counter1++;
        } else {
            counter2++;
        }
    }

    console.log(counter / arr.length);
    console.log(counter1 / arr.length);
    console.log(counter2 / arr.length);
}

//################### SOLUTION #############################

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
