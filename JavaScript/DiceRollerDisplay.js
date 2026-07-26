const button = document.getElementById("but");
const number = document.getElementById("num");
const diceCount = document.getElementById("diceCount");
const die = [...document.getElementsByClassName("die")];

let rand = [];
let max = 6;
let min = 1;

button.onclick = function(){
    let input = number.value;
    for(let i = 0 ; i < max ; i++){
        die[i].style.display = "none";
    }
    if(input < min){
        input = min;
    }else if(input > max){
        input = max;
    }
    for(let i = 0 ; i < input ; i++){
        rand.push(Math.floor(Math.random()*6)+1);
    }
    diceCount.textContent = `dice: ${rand}`
    for(let i = 0 ; i < input ; i++){
        die[rand[i]-1].style.display = "block";
    }
    rand = [];
}