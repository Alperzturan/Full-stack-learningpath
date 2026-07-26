//foreach

/* let num = [1,2,3,4,5];

num.forEach(display);

function display(a){
    console.log(a);
} */


//map

/* let num = [1,2,3,4,5];

let a = num.map(double);

console.log(a);

function double(num){
    return num*2
}
 */


//filter

/* let num = [1,2,3,4,5];

let a = num.filter(isEven);

console.log(a);

function isEven(num){
    return num%2 == 0;
} */


//reduce

/* let num = [1,2,3,4,5];

let a = num.reduce(max);

console.log(a);

function sum(top, num){
    return top+num;
}

function max(prev, next){
    return Math.max(prev, next);
} */


//objects

/* let person1 = {
    fname: "a",
    lname: "b",
    age: 12,
    isStudent: true,
    talk: () => console.log("Hello"),
}

console.log(person1.fname);
console.log(person1.lname);
console.log(person1.age);
console.log(person1.isStudent);
person1.talk(); */


//shuffling array

const deck = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];

console.log(shuffle(deck));

function shuffle(deck){
    for(let i = deck.length-1; i>=0; i--){
        const random = Math.floor(Math.random()*(deck.length-1));
        [deck[i], deck[random]] = [deck[random], deck[i]];
    }
    console.log(deck.length);
    return deck;
}