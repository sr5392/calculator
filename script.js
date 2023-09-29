let number1, number2;
let operator;
let displayValue;


function operate(operator, number1, number2) {
    return operator(number1, number2);
}

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}
