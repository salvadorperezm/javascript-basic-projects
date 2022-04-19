const calcDisplay = document.querySelector(".calculator__display");
const calcKeys = document.querySelector(".calculator__keys");

let currentOperation = "";


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
                if (calcDisplay.textContent === "0") {
                    calcDisplay.textContent = "";
                    calcDisplay.textContent += e.target.textContent;
                } else {
                    calcDisplay.textContent += e.target.textContent;
                }
            } else {
                const n1 = Number(calcDisplay.textContent);
                calcDisplay.textContent = "0";
            }
            break;
        
        default:
            currentOperation = keyAction;
            break;
    }

});