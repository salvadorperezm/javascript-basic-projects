const buttonsContainer = document.querySelector(".buttons-container");
const resultsContainer = document.querySelector(".results-container");

let num = 0;
let newNumber = 0;
let currentOperation = "";

function equalsButtonOperation() {
    switch (currentOperation) {
        case "sum":
            newNumber = Number(resultsContainer.textContent);
            num += newNumber;
            resultsContainer.textContent = num;
            break;
        
        case "minus":
            newNumber = Number(resultsContainer.textContent);
            num -= newNumber;
            resultsContainer.textContent = num;
            break;
        
        case "mult":
            newNumber = Number(resultsContainer.textContent);
            num *= newNumber;
            resultsContainer.textContent = num;
            break;
        
        case "divide":
            newNumber = Number(resultsContainer.textContent);

            if (newNumber === 0) {
                resultsContainer.textContent = "Error";
            } else {
                num /= newNumber;
                resultsContainer.textContent = num;
            }

            break;
    }
}

buttonsContainer.addEventListener("click", (e) => {
    const targetAttribute = e.target.getAttribute("data");

    switch (targetAttribute) {
        case "clear":
            num = 0;
            newNumber = 0;
            currentOperation = "";
            resultsContainer.textContent = "";
            break;

        case "input":
            resultsContainer.textContent += e.target.textContent;
            break;

        case "sum":
            num = Number(resultsContainer.textContent);
            currentOperation = targetAttribute;
            resultsContainer.textContent = "";
            break;

        case "minus":
            num = Number(resultsContainer.textContent);
            currentOperation = targetAttribute;
            resultsContainer.textContent = "";
            break;

        case "mult":
            num = Number(resultsContainer.textContent);
            currentOperation = targetAttribute;
            resultsContainer.textContent = "";
            break;
        
        case "divide":
            num = Number(resultsContainer.textContent);
            currentOperation = targetAttribute;
            resultsContainer.textContent = "";
            break;

        case "equals":
            equalsButtonOperation();
            break;
    }
});