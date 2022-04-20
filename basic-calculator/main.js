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
            break;

        case "calculate":
            console.log("You hit the calculate key");
            break;

        case "number":
           if (currentOperation === "") {
                inputNumberHandler(e);
            } else {
                const n1 = Number(calcDisplay.textContent);
                inputNumberHandler(e);
            }
            break;
        
        default:
            currentOperation = keyAction;
            break;
    }

});