/* const result = document.getElementById("result");
let op;
let first;
let last;
let index;
let isEq = false;
let isBefore = false;

function controlEq(){
    if(isEq){
        isEq = false;
        result.textContent = "";
    }
    isBefore = true;
}
function controlBefore(){
    if(isBefore){
        isBefore = false;
        result.textContent = "";
    }
}

function n1(){
    controlEq();
    result.textContent += 1;
} 
function n2(){
    controlEq();
    result.textContent += 2;
} 
function n3(){
    controlEq();
    result.textContent += 3;
} 
function n4(){
    controlEq();
    result.textContent += 4;
} 
function n5(){
    controlEq();
    result.textContent += 5;
} 
function n6(){
    controlEq();
    result.textContent += 6;
} 
function n7(){
    controlEq();
    result.textContent += 7;
}
function n8(){
    controlEq();
    result.textContent += 8;
} 
function n9(){
    controlEq();
    result.textContent += 9;
} 
function n0(){
    controlEq();
    result.textContent += 0;
}
function add(){
    if(isBefore){
        result.textContent += "+";
        op = "+";
        isBefore = false;
    }
}
function sub(){
    if(isBefore){
        result.textContent += "-";
        op = "-";
        isBefore = false;
    }
}
function mul(){
    if(isBefore){
        result.textContent += "*";
        op = "*";
        isBefore = false;
    }
}
function div(){
    if(isBefore){
        result.textContent += "/";
        op = "/";
        isBefore = false;
    }
}
function dot(){
    if(isBefore){
        result.textContent += ".";
        isBefore = false;
    }
    
}
function C(){
    result.textContent = "";
    op = null;
    first = null;
    last = null;
}
function eq(){
    isEq = true;
    let res = result.textContent;
    switch(op){
        case "+":
            index = res.indexOf("+");
            first = Number(res.slice(0, index));
            last = Number(res.slice(index+1));
            result.textContent = Number((first + last).toFixed(2));
            break;
        case "-":
            index = res.indexOf("-");
            first = Number(res.slice(0, index));
            last = Number(res.slice(index+1));
            result.textContent = Number((first - last).toFixed(2));
            break;
        case "*":
            index = res.indexOf("*");
            first = Number(res.slice(0, index));
            last = Number(res.slice(index+1));
            result.textContent = Number((first * last).toFixed(2));
            break;
        case "/":
            index = res.indexOf("/");
            first = Number(res.slice(0, index));
            last = Number(res.slice(index+1));
            result.textContent = Number((first / last).toFixed(2));
            break;
    }
} */


//calculator2 hmtl

const result = document.getElementById("result");

function display(a){
    result.value += a;
}
function clearDisplay(){
    result.value = "";
}
function operation(){
    try{
        result.value = eval(result.value);
    }catch(error){
        result.value = "Error";
    }
}