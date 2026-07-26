const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const pScore = document.getElementById("pScore");
const cScore = document.getElementById("cScore");
const buttons = document.querySelectorAll(".buttons");

const rps = ["✊","✋","✌️"];
let cChoice;

buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        cChoice = RPS(); 
        console.log(cChoice);
        game(button.textContent, cChoice);
    });
})

function RPS(){
    let rand = Math.floor(Math.random()*3);
    console.log(rand);
    return rps[rand];
}

function game(pChoice, cChoice){
    switch(pChoice){
        case "✊":
            player.textContent = "Player: rock";
            switch(cChoice){
                case "✊":
                    computer.textContent = "Computer: rock";
                    result.textContent = "IT'S A TIE!";
                    result.style.color = "black";
                    break;
                case "✋":
                    computer.textContent = "Computer: paper";
                    result.textContent = "YOU LOSE!";
                    result.style.color = "#cc0000";
                    cScore.textContent = Number(cScore.textContent)+1;
                    break;
                case "✌️":
                    computer.textContent = "Computer: scissors";
                    result.textContent = "YOU WIN!";
                    result.style.color = "#65e765";
                    pScore.textContent = Number(pScore.textContent)+1;
                    break;
            }
            break;
        case "✋":
            player.textContent = "Player: paper";
            switch(cChoice){
                case "✊":
                    computer.textContent = "Computer: rock"
                    result.textContent = "YOU WIN!";
                    result.style.color = "#65e765";
                    pScore.textContent = Number(pScore.textContent)+1;
                    break;
                case "✋":
                    computer.textContent = "Computer: paper"
                    result.textContent = "IT'S A TIE!";
                    result.style.color = "black";
                    break;
                case "✌️":
                    computer.textContent = "Computer: scissors"
                    result.textContent = "YOU LOSE!";
                    result.style.color = "#cc0000";
                    cScore.textContent = Number(cScore.textContent)+1;
                    break;
            }
            break;
        case "✌️":
            player.textContent = "Player: scissors";
            switch(cChoice){
                case "✊":
                    computer.textContent = "Computer: rock"
                    result.textContent = "YOU LOSE!";
                    result.style.color = "#cc0000";
                    cScore.textContent = Number(cScore.textContent)+1;
                    break;
                case "✋":
                    computer.textContent = "Computer: paper"
                    result.textContent = "YOU WIN!";
                    result.style.color = "#65e765";
                    pScore.textContent = Number(pScore.textContent)+1;
                    break;
                case "✌️":
                    computer.textContent = "Computer: scissors"
                    result.textContent = "IT'S A TIE!";
                    result.style.color = "black";
                    break;
            }
            break;
    }
}