
const display = document.querySelector(".calculator-display p");

let number1 = "";
let number2 = "";
let operator = "";

for (let i = 0; i <= 9; i++) {
    let button = document.querySelector("#calculator-button-number-" + i)
    button.addEventListener("click", () => {
        if (operator == "") {
            number1 += i;
        } else {
            number2 += i; 
        }

        updateDisplay();
    });
}

const buttonReset = document.querySelector("#calculator-button-reset");
buttonReset.addEventListener("click", () => {
    number1 = "";
    number2 = "";
    operator = "";

    display.innerText = "0";
});

const buttonDelete = document.querySelector("#calculator-button-delete");
buttonDelete.addEventListener("click", () => {
    if (operator == "") {
        number1 = number1.slice(0, -1);
    } else {
        number2 = number2.slice(0, -1);
    }

    updateDisplay();
});

const buttonEquals = document.querySelector("#calculator-button-equals");
buttonEquals.addEventListener("click", () => {
    display.innerText = operate(operator, number1, number2);
});

const buttonAdd = document.querySelector("#calculator-button-add");
buttonAdd.addEventListener("click", () => {
    if (number2 != "") {
        number1 = operate(operator, parseFloat(number1), parseFloat(number2)).toString();
        number2 = "";
    }

    operator =  "+";

    updateDisplay();
});

const buttonSubtract = document.querySelector("#calculator-button-subtract");
buttonSubtract.addEventListener("click", () => {
    if (number2 != "") {
        number1 = operate(operator, parseFloat(number1), parseFloat(number2)).toString();
        number2 = "";
    }

    operator =  "-";

    updateDisplay();
});

const buttonMultiply = document.querySelector("#calculator-button-multiply");
buttonMultiply.addEventListener("click", () => {
    if (number2 != "") {
        number1 = operate(operator, parseFloat(number1), parseFloat(number2)).toString();
        number2 = "";
    }

    operator =  "*";

    updateDisplay();
});

const buttonDivide = document.querySelector("#calculator-button-divide");
buttonDivide.addEventListener("click", () => {
    if (number2 != "") {
        number1 = operate(operator, parseFloat(number1), parseFloat(number2)).toString();
        number2 = "";
    }

    operator =  "/";

    updateDisplay();;
});

function operate(operator, number1, number2) {
    switch (operator) {
        case "+":
            operator = add;
            break;
        case "-":
            operator = subtract;
            break;
        case "*": 
            operator = multiply;
            break;
        case "/": 
            operator = divide;
            break;
    }

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

function updateDisplay() {
    display.innerText = number1 + " " + operator + " " + number2;
}