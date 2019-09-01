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
        if(visuals[0] == "-" || visuals[0] == "+") {
            if(i == 0) {
                n1 += visuals[i];
                continue;
            }
        }
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
    console.log(n1 + " and " + n2);
    operate(Number(n1), Number(n2), op);
;}

let visuals = "";
let pointDouble = false;
let equalsPress = false;

const display = document.querySelector('.screen p');


const numbers = document.querySelectorAll(".number");
numbers.forEach(function(number) {
    number.addEventListener("click", function(e) {
        if(equalsPress == true) {
            visuals = "";
            pointDouble = false;
            equalsPress = false;
        }
        if(e.target.textContent == ".") {
            if(pointDouble == false) {
                visuals += e.target.textContent;
                display.textContent = visuals;
            }
            pointDouble = true;
        } else {
            visuals += e.target.textContent;
            display.textContent = visuals;
        }
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach(function(operator) {
    operator.addEventListener("click", function(e) {
        if(equalsPress == true) {
            visuals = "";
            pointDouble = false;
            equalsPress = false;
        }
        if((visuals.length > 1) && (e.target.textContent == "/" || e.target.textContent == "*" || e.target.textContent == "-" || e.target.textContent == "+")) {
            pointDouble = false;
            converter(visuals);
        }
        if(visuals[visuals.length - 1] != "/" || visuals[visuals.length - 1] != "*" || visuals[visuals.length - 1] != "-" || visuals[visuals.length - 1] != "+") {
            visuals += e.target.textContent;
            display.textContent = visuals;
        }
    });
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", function(){
    equalsPress = true;
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