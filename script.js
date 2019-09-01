function operate(n1, n2, op) {
    switch(op) {
        case "/":
            visuals = String(n1 / n2);
            display.textContent = (n1 / n2);
            break;
        case "*":
            visuals = String(n1 * n2);
            display.textContent = (n1 * n2);
            break;
        case "-":
            visuals = String(n1 - n2);
            display.textContent = (n1 - n2);
            break;
        case "+":
            visuals = String(n1 + n2);
            display.textContent = (n1 + n2);
            break;
    }
}

function converter(visuals) {
    let n1 = "";
    let n2 = "";
    let op = "";

    for(let i = 0; i < visuals.length; i++) {
        if(visuals[i] == "/" || visuals[i] == "*" || visuals[i] == "-" || visuals[i] == "+") {
            op = visuals[i];
            i++;
            for(; i < visuals.length; i++) {
                n2 += visuals[i];
            }
            break;
        }
        n1 += visuals[i];
    }
    operate(Number(n1), Number(n2), op);
;}

let visuals = "";
let operatorDouble = false;

const display = document.querySelector('.screen p');


const numbers = document.querySelectorAll(".number, .operator");
numbers.forEach(function(number) {
    number.addEventListener("click", function(e) {
        if(e.target.textContent == "/" || e.target.textContent == "*" || e.target.textContent == "-" || e.target.textContent == "+") {
            operatorDouble = true;
            converter(visuals);
        }
        visuals += e.target.textContent;
        display.textContent = visuals;
    });
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", function(){
    converter(visuals);
});

const remove = document.querySelector(".remove");
remove.addEventListener("click", function() {
    visuals = visuals.split("");
    visuals.splice((visuals.length - 1),1);
    visuals = visuals.join("");
    display.textContent = visuals;
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", function() {
    visuals = "";
    display.textContent = visuals;
});