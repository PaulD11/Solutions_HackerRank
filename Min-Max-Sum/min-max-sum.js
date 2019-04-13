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

function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;

    arr = arr.sort();

    for (let i = 0; i < arr.length; i++){
        maxSum = maxSum + arr[i];
    }

    minSum = maxSum - arr[arr.length -1];
    maxSum = maxSum - arr[0];

    console.log(minSum, maxSum);

}

//################### SOLUTION #############################

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
