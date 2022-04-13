const buttonsContainer = document.querySelector(".buttons-container");
const resultsContainer = document.querySelector(".results-container");

let num = 0;

buttonsContainer.addEventListener("click", (e) => {
    const targetAttribute = e.target.getAttribute("data");
    
    switch(targetAttribute) {
        case "clear":
            resultsContainer.textContent = "";
            num = 0;
            break;
        case "input":
            resultsContainer.textContent += e.target.textContent;
            break;
        case "sum":
            num += Number(resultsContainer.textContent);
            alert(num);
            resultsContainer.textContent = "";
            break;
        case "equals":
            resultsContainer.textContent = num;
            break;
    }
});