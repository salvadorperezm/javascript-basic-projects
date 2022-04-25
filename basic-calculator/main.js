const calcDisplay = document.querySelector(".calculator__display");
const calcKeys = document.querySelector(".calculator__keys");

let currentOperation = "";

function inputNumberHandler(e) {
    if (calcDisplay.textContent === "0") {
        calcDisplay.textContent = e.target.textContent;
    } else {
        calcDisplay.textContent += e.target.textContent;
    }
}


calcKeys.addEventListener("click", (e) => {
    const keyAction = e.target.getAttribute("data-action");

    switch (keyAction) {
        case "decimal":
            calcDisplay.textContent += ".";
            break;
        
        case "clear":
            calcDisplay.textContent = "0";
            currentOperation = "";
            n1 = 0;
            n2 = 0;
            operationCounter = 0;
            break;

        case "calculate":
            console.log("you hit the calculate button");
            break;

        case "number":
            inputNumberHandler(e);
            break;
        
        default:
            console.log(`Current operation: ${keyAction}`);
            break;
    }

});