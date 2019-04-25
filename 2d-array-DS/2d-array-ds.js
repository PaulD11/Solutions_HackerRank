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

function hourglassSum(arr) {
    let tempHourGlass = 0;
    let hourGlass = -72;
    let cycles = 0;
    let nextRow = 0;

    for (let j = 0; j <= 15; j++){
        for (let i = 0 + nextRow; i < arr.length - 3 + nextRow; i++) {
            if (i != nextRow + 1) {
                tempHourGlass = tempHourGlass + arr[i][0 + cycles];
            }
            tempHourGlass = tempHourGlass + arr[i][1 + cycles];
            if (i != nextRow + 1) {
                tempHourGlass = tempHourGlass + arr[i][2 + cycles];
            }
        }
        if (tempHourGlass > hourGlass) {
            hourGlass = tempHourGlass;
        }
        tempHourGlass = 0;
        cycles++;
        if (cycles == 4) {
            cycles = 0;
            nextRow++;
        }
    }  
    return hourGlass;
}

//################### SOLUTION #############################

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
