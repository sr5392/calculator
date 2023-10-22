
const display = document.querySelector(".calculator-display p");

for (let i = 0; i <= 9; i++) {
    let button = document.querySelector("#calculator-button-number-" + i)
    button.addEventListener("click", () => {
        display.innerText += i;
    });
}

const buttonReset = document.querySelector("#calculator-button-reset");
buttonReset.addEventListener("click", () => {
    display.innerText = "0";
});

const buttonDelete = document.querySelector("#calculator-button-delete");
buttonDelete .addEventListener("click", () => {
    display.innerText = "0";
});

const buttonEquals = document.querySelector("#calculator-button-equals");
buttonEquals.addEventListener("click", () => {
    display.innerText = operate(operator, number1, number2);
});

"calculator-button-equals"
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

