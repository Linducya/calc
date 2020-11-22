const readline = require('readline-sync');

function printWelcomeMessage() {
console.log('\nWelcome to the calculator!');
console.log('=========================');
}

function getResponse(prompt) {
    console.log('\n' + prompt);
    return readline.prompt();
}

function convertNumber(prompt) {
    let response; 
    do {
        response = +getResponse(prompt); 
    } while (isNaN(response));  
    return response;
}

function getOperator() {
    let operator;
    do {
    operator = getResponse('\nPlease enter the operator: ');
    } while (!(operator == '+' || operator == '-' || operator == '*' || operator == '/'));
    return operator;
}

function getNumberArray(operator) {
    const ITERATIONS = convertNumber('\nHow many numbers to you want to ' + operator + '?');
    let arr = [];
    arr.length = ITERATIONS;
    for (let i = 0; i < arr.length; i++) {
    arr[i] = convertNumber('\nPlease enter number ' + (i + 1) + ':');
    }
return arr;    
}

function getAnswer(arr, operator) {
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
    } 
}
return answer;
}


function performOneCalculation() {
    const OPERATOR = getOperator();
    const MYARRAY = getNumberArray(OPERATOR);
    const ANSWER = getAnswer(MYARRAY, OPERATOR);
    return console.log('\nThe answer is ' + ANSWER + '\n');
}

printWelcomeMessage();
while (true) {
performOneCalculation();
}