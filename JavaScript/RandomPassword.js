const symbols = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126];
const numbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const lowerCase = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
const upperCase = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
let password = [];

let passwordL = 10;

let symbolsB = true;
let numbersB = true;
let lowerCaseB = true;
let upperCaseB = true;

function RandomPassword(symbols, numbers, lowerCase, upperCase, symbolsB, numbersB, lowerCaseB, upperCaseB, passwordL){
    let lists = [];
    let count = 0; 
    if (symbolsB){
        lists.push(symbols);
        count++;
    }
    if (numbersB){
        lists.push(numbers);
        count++;
    }
    if (lowerCaseB){
        lists.push(lowerCase);
        count++;
    }
    if (upperCaseB){
        lists.push(upperCase);
        count++;
    }
    if (count == -1){
        console.log("Your password doesnt contain anything!");
    }
    let randomList;
    let randomChar;
    let password = [];
    for (let i = passwordL ; i > 0 ; i--){
        randomList = Math.floor((Math.random()*count));
        randomChar = lists[randomList][Math.floor((Math.random()*lists[randomList].length))];
        password.push(String.fromCharCode(randomChar));
    }
    return password;
}

password = RandomPassword(symbols, numbers, lowerCase, upperCase, symbolsB, numbersB, lowerCaseB, upperCaseB, passwordL)

console.log(password.join(""));