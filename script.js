const display = document.querySelector(".calculator-display p");

let number1 = "0";
let number2 = "";
let operator = "";

let isNewNumber = false;

for (let i = 0; i <= 9; i++) {
    let button = document.querySelector("#calculator-button-number-" + i)
    button.addEventListener("click", () => {
        if (operator == "") {
            if (isNewNumber || number1 == "0") {
                number1 = i.toString();
                isNewNumber = false;
            } else {
                number1 += i.toString(); 
            }
        } else {
            number2 += i.toString(); 
        }

        updateDisplay();
    });
}

const buttonReset = document.querySelector("#calculator-button-reset");
buttonReset.addEventListener("click", () => {
    number1 = "0";
    number2 = "";
    operator = "";

    updateDisplay();
});

const buttonDelete = document.querySelector("#calculator-button-delete");
buttonDelete.addEventListener("click", () => {
    if (operator == "") {
        number1 = number1.slice(0, -1);
    } else {
        if (number2 == "") {
            operator = "";
        } else {
            number2 = number2.slice(0, -1);
        }
    }

    if (number1 == "") {
        number1 = "0";
    }

    updateDisplay();
});

const buttonEquals = document.querySelector("#calculator-button-equals");
buttonEquals.addEventListener("click", () => {

    if (number2 == "") {
        number2 = number1;
    }

    number1 = operate(operator, parseFloat(number1), parseFloat(number2)).toString();
    number2 = "";
    operator = "";

    isNewNumber = true;
    updateDisplay();
});

const buttonAdd = document.querySelector("#calculator-button-add");
buttonAdd.addEventListener("click", () => {
    updateParameters();
    operator =  "+";
    updateDisplay();
});

const buttonSubtract = document.querySelector("#calculator-button-subtract");
buttonSubtract.addEventListener("click", () => {
    updateParameters();
    operator =  "-";
    updateDisplay();
});

const buttonMultiply = document.querySelector("#calculator-button-multiply");
buttonMultiply.addEventListener("click", () => {
    updateParameters();
    operator =  "*";
    updateDisplay();
});

const buttonDivide = document.querySelector("#calculator-button-divide");
buttonDivide.addEventListener("click", () => {
    updateParameters();
    operator =  "/";
    updateDisplay();;
});

const buttonDecimal = document.querySelector("#calculator-button-decimal");
buttonDecimal.addEventListener("click", () => {
    if (operator == "") {
        if (!number1.includes(".")) {
            if (number1 == "" || isNewNumber) {
                number1 = "0";
                isNewNumber = false;
            }
            number1 += ".";  
        }
    } else {
        if (!number2.includes(".")) {
            if (number2 == "") {
                number2 = "0";
            }
            number2 += ".";
        }
    }   

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
        default:
            return number1;
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

function updateParameters() {
    if (number2 != "") {
        number1 = operate(operator, parseFloat(number1), parseFloat(number2)).toString();
        operator = "";
        number2 = "";
    }
}

function updateDisplay() {
    let displayText = number1 + " " + operator + " " + number2;

    if (displayText.length > 26) {
        displayText = displayText.slice(0, 26);
    }

    display.innerText = displayText;
}
