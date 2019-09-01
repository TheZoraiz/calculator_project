function operate(n1, n2, op) {
    switch(op) {
        case "/":
            visual = String(n1 / n2);
            display.textContent = (n1 / n2);
            break;
        case "*":
            visual = String(n1 * n2);
            display.textContent = (n1 * n2);
            break;
        case "-":
            visual = String(n1 - n2);
            display.textContent = (n1 - n2);
            break;
        case "+":
            visual = String(n1 + n2);
            display.textContent = (n1 + n2);
            break;
    }
}

function converter(visual) {
    let n1 = "";
    let n2 = "";
    let op = "";

    for(let i = 0; i < visual.length; i++) {
        if(visual[i] == "/" || visual[i] == "*" || visual[i] == "-" || visual[i] == "+") {
            op = visual[i];
            i++;
            for(; i < visual.length; i++) {
                n2 += visual[i];
            }
            break;
        }
        n1 += visual[i];
    }
    operate(Number(n1), Number(n2), op);
;}

let visual = "";
let operatorDouble = false;

const display = document.querySelector('.screen p');


const numbers = document.querySelectorAll(".number, .operator");
numbers.forEach(function(number) {
    number.addEventListener("click", function(e) {
        if(e.target.textContent == "/" || e.target.textContent == "*" || e.target.textContent == "-" || e.target.textContent == "+") {
            operatorDouble = true;
            converter(visual);
        }
        visual += e.target.textContent;
        display.textContent = visual;
    });
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", function(){
    converter(visual);
});

const remove = document.querySelector(".remove");
remove.addEventListener("click", function() {
    visual = visual.split("");
    visual.splice((visual.length - 1),1);
    visual = visual.join("");
    display.textContent = visual;
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", function() {
    visual = "";
    display.textContent = visual;
});