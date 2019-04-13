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

function staircase(n) {
    let hashtags = '';
    let spaces = [];

    for (let i = 0; i <= n -1; i++){
        spaces.push(' ')
    }
    for (let i = 0; i < n; i++){
        hashtags = hashtags + '#';
        spaces.pop();
        console.log(spaces.join('') + hashtags);
    }
}

//################### SOLUTION #############################

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
