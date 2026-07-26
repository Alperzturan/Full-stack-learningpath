const button = document.getElementById("but");
const number = document.getElementById("num");
const diceCount = document.getElementById("diceCount");
const container = document.getElementById("container");

let images = [];
let rand = [];
let min = 1;

button.onclick = function(){
    container.innerHTML = " "
    let input = number.value;
    if(input < min){
        input = min;
    }
    for(let i = 0 ; i < input ; i++){
        rand.push(Math.floor(Math.random()*6)+1);
        images.push(`<img src="DiceRollerPhoto/Dice${rand[i]}.png" alt="Dice${rand[i]}.png" height="100px"></img>`);
    }
    diceCount.textContent = `dice: ${rand.join(", ")}`
    for(let i = 0 ; i < input ; i++){
        container.innerHTML += images[i];
    }
    rand = [];
    images = [];
}