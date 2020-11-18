const readline =   require('readline-sync');
// const response = readline.prompt();

console.log('Welcome to the calculator!');
console.log('=========================');

console.log('Please enter the operator: ');
const operator = readline.prompt();

console.log('Please enter the first number: ');
const firstNumber = readline.prompt();
// firstNumber = (+firstNumber);

console.log('Please enter the second number: ');
const secondNumber = readline.prompt();
// secondNumber = (+secondNumber);

let answer;

// if (operator === '+') {
//     answer = +firstNumber + +secondNumber;
// } else if (operator === '-') {
//     answer = +firstNumber - +secondNumber;
// } else if (operator === '*') {
//     answer = +firstNumber * +secondNumber;
// } else { answer = +firstNumber / +secondNumber; }

switch (operator) {
    case '+':
        answer = +firstNumber + +secondNumber;
        break;
    case '-':
        answer = +firstNumber - +secondNumber;    
        break;
    case '*':
        answer = +firstNumber * +secondNumber;
        break;   
    case '/':
        answer = +firstNumber / +secondNumber;
        break    
    default:
        console.log(operator + ' is not a valid operator');
        break;
}


// const answer = +firstNumber operator= +secondNumber;
console.log('The answer is: ' + answer);