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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

//################### SOLUTION #############################

function timeConversion(s) {
    let time = s.slice(0, 8).split(':');
    
    time[0] = s.includes('PM') ?
        time[0] == '12' ? '12' :
        parseInt(time[0]) + 12 :
        time[0] == '12' ? '00' : 
        time[0];

    return time.join(':');

}

//################### SOLUTION #############################

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
