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

//Trackers and screen
let visuals = "";
let pointDouble = false;
let equalsPress = false;

const display = document.querySelector('.screen p');

//Number Keys
const numbers = document.querySelectorAll(".number");
numbers.forEach(function(number) {
    number.addEventListener("click", function(e) {
        if(equalsPress == true) {
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

//Operator Keys
const operators = document.querySelectorAll(".operator");
operators.forEach(function(operator) {
    operator.addEventListener("click", function(e) {
        if(equalsPress == true) {
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

//Equals Key
const equals = document.querySelector(".equals");
equals.addEventListener("click", function(){
    equalsPress = true;
    pointDouble = false;
    converter(visuals);
});

//Remove Key
const remove = document.querySelector(".remove");
remove.addEventListener("click", function() {
    visuals = visuals.split("");
    visuals.splice((visuals.length - 1),1);
    visuals = visuals.join("");
    pointDouble = false;
    display.textContent = visuals;
});

//Clear Key
const clear = document.querySelector(".clear");
clear.addEventListener("click", function() {
    visuals = "";
    pointDouble = false;
    display.textContent = visuals;
});