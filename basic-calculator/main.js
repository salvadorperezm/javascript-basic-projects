const calcDisplay = document.querySelector(".calculator__display");
const calcKeys = document.querySelector(".calculator__keys");

let currentOperation = "";

function inputHandler(e) {
    if (calcDisplay.textContent === "0") {
        calcDisplay.textContent = "";
        calcDisplay.textContent += e.target.textContent;
    } else {
        calcDisplay.textContent += e.target.textContent;
    }
    console.log(e.target.textContent);
}

function operationHandler() {
    
}

calcKeys.addEventListener("click", (e) => {
    const keyAction = e.target.getAttribute("data-action");

   switch (keyAction) {
       case null:
           inputHandler(e);
           break;
        
        case "decimal":
            calcDisplay.textContent += ".";
            console.log(e.target.textContent);
            break;
        
        case "clear":
            currentOperation = "";
            calcDisplay.textContent = "0";
            break;

        case "sum":
            currentOperation = keyAction;
            console.log(currentOperation);
            break;

        case "substraction":
            currentOperation = keyAction;
            console.log(currentOperation);
            break;

        case "division":
            currentOperation = keyAction;
            console.log(currentOperation);
            break;

        case "multiplication":
            currentOperation = keyAction;
            console.log(currentOperation);
            break;
   }
});