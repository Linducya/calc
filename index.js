const readline = require('readline-sync');

console.log('\nWelcome to the calculator!');
console.log('=========================');

console.log('\nPlease enter the operator: ');
const operator = readline.prompt();

console.log('\nPlease enter the first number: ');
const firstArgument = readline.prompt();
const firstNumber = +firstArgument;

console.log('\nPlease enter the second number: ');
const secondArgument = readline.prompt();
const secondNumber = +secondArgument;

let answer;

// Example using if and else
/* if (operator === '+') {
    answer = firstNumber + secondNumber;
} else if (operator === '-') {
    answer = firstNumber - secondNumber;
} else if (operator === '*') {
    answer = firstNumber * secondNumber;
} else if (operator === '/') { 
    answer = firstNumber / secondNumber;
} else {
    console.log('\n' + operator + ' is not a valid operator');
} */

// Example using switch
switch (operator) {
    case '+':
        answer = firstNumber + secondNumber;
        break;
    case '-':
        answer = firstNumber - secondNumber;    
        break;
    case '*':
        answer = firstNumber * secondNumber;
        break;   
    case '/':
        answer = firstNumber / secondNumber;
        break    
    default:
        console.log('\n' + operator + ' is not a valid operator');
        break;
}

console.log('\nThe answer is: ' + firstNumber + operator + secondNumber + ' = ' + answer + '\n');