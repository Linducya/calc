const readline = require('readline-sync');

console.log('\nWelcome to the calculator!');
console.log('=========================');

console.log('\nPlease enter the operator: ');
const operator = readline.prompt();

console.log('\nHow many numbers to you want to ' + operator + '?');
const response = readline.prompt();
const iterations = +response;

let arr = [];
arr.length = iterations;

for (let i = 0; i < arr.length; i++) {
    console.log('\nPlease enter number ' + (i + 1) + ':');
    const argument = readline.prompt();
    // const number = +argument;
    arr[i] = +argument;
}

let answer = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (operator === '+') {
        answer += arr[i];
    } else if (operator === '-') {
        answer -= arr[i];
    } else if (operator === '*') {
        answer *= arr[i];
    } else if (operator === '/') { 
        answer /= arr[i];
    } else {
        answer = ('not possible as you entered ' + operator + ' which is not a valid operator!');
    }
}

console.log('\nThe answer is ' + answer + '\n');