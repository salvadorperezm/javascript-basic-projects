const calcDisplay = document.querySelector(".calculator__display");
const calcKeys = document.querySelector(".calculator__keys");

let currentOperation = null;
let num = 0;


function currentOperationHandler(currentOperation) {
    switch (currentOperation) {
        case "sum":
            num += Number(calcDisplay.textContent);
            calcDisplay.textContent = num;
            break;

        case "substraction":
            num -= Number(calcDisplay.textContent);
            calcDisplay.textContent = num;
            break;
    }
}


calcKeys.addEventListener("click", (e) => {
    const keyAction = e.target.getAttribute("data-action");
    console.log(keyAction);
    
    switch (keyAction) {
        case "clear":
            calcDisplay.textContent = "0";
            num = 0;
            currentOperation = null;
            break;

        case null:
            if (currentOperation === null) {
                if (calcDisplay.textContent === "0") {
                calcDisplay.textContent = "";
                calcDisplay.textContent += e.target.textContent;
                } else {
                    calcDisplay.textContent += e.target.textContent;
                }

            } else {
                if (keyAction !== "sum" || keyAction !== "substraction" || keyAction !== "division" || keyAction !== "multiplication") {
                    calcDisplay.textContent += e.target.textContent;
                } else if (keyAction === "sum" || keyAction === "substraction" || keyAction === "division" || keyAction === "multiplication"){
                    currentOperationHandler(currentOperation);
                    currentOperation = keyAction;
                }
            }
            break;

        case "sum":
            num = Number(calcDisplay.textContent);
            calcDisplay.textContent = "";
            currentOperation = "sum";
            break;

        case "substraction":
            num = Number(calcDisplay.textContent);
            calcDisplay.textContent = "";
            currentOperation = "substraction";
            break;

        case "decimal":
            calcDisplay.textContent += ".";
            break;

        case "calculate":
            currentOperationHandler(currentOperation);
            break;
    }
});