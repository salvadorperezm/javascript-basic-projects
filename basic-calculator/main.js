const calcDisplay = document.querySelector(".calculator__display");
const calcKeys = document.querySelector(".calculator__keys");

let currentOperation = "";
let baseNumber = 0;
let operationNumber = 0;
let operationCounter = 0;
let storedOperation = "";

function clearData() {
    calcDisplay.textContent = "0";
    currentOperation = "";
    baseNumber = 0;
    operationNumber = 0;
    operationCounter = 0;
    storedOperation = "";
}

function inputNumberHandler(e) {
    if (calcDisplay.textContent === "0" || calcDisplay.textContent === "Error") {
        calcDisplay.textContent = e.target.textContent;
    } else {
        calcDisplay.textContent += e.target.textContent;
    }
}

function operationHandler(baseNumber, storedOperation, operationNumber) {
    switch (storedOperation) {
        case "sum":
            calcDisplay.textContent = baseNumber + operationNumber;
            currentOperation = "";
            break;
        
        case "substraction":
            calcDisplay.textContent = baseNumber - operationNumber;
            currentOperation = "";
            break;

        case "multiplication":
            calcDisplay.textContent = baseNumber * operationNumber;
            currentOperation = "";
            break;
        
        case "division":
            if (operationNumber === 0) {
                calcDisplay.textContent = "Error";
                currentOperation = "";
            } else {
                calcDisplay.textContent = baseNumber / operationNumber;
                currentOperation = "";
            }
            break;
    }
}

calcKeys.addEventListener("click", (e) => {
    const keyAction = e.target.getAttribute("data-action");

    switch (keyAction) {
        case "decimal":
            calcDisplay.textContent += ".";
            break;
        
        case "clear":
            clearData();
            break;

        case "calculate":
            operationHandler(baseNumber, storedOperation, Number(calcDisplay.textContent));
            break;

        case "number":
            if (operationCounter === 0) {
                inputNumberHandler(e);
            } else {
                calcDisplay.textContent = "0";
                operationCounter--;
                inputNumberHandler(e);
            }
            break;

        default:
            if (currentOperation === "") {
                baseNumber = Number(calcDisplay.textContent);
                currentOperation = keyAction;
                storedOperation = keyAction;
                operationCounter++;
            } else {
                operationHandler(baseNumber, currentOperation, Number(calcDisplay.textContent));
                baseNumber = Number(calcDisplay.textContent);
                currentOperation = keyAction;
                storedOperation = keyAction;
                operationCounter++;
            }

            break;
    }

});