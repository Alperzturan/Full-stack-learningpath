let guess = Math.floor(window.prompt("Guess a number between 1 and 100, you have 10 tries."));

let rand = Math.floor(Math.random()*100)+1;

for(let i = 10; i>-1 ; i--){
    while(guess<0 || guess>100){
        guess = Math.floor(window.prompt(`Your guess is out of bound, please choose a number between 1 and 100.`));
    }
    while(isNaN(guess)){
        guess = Math.floor(window.prompt(`You did not enter a valid number, please choose a number between 1 and 100.`));
    }
    if(guess != rand){
        if(i-1 == 0){
            window.alert(`You are out of tries.`);
            break;
        }   
        guess = window.prompt(`Wrong guess, try again. Choose a number between 1 and 100, you have ${i-1} tries left.`);
    }else{
        window.alert(`You guessed correctly, the number was ${rand}`);
        break;
    }
}