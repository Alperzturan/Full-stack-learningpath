let numbers = [1,2,3,4,5];
let max = Math.max(numbers);
let max = Math.max(...numbers);
console.log(max);

let aaa = [6,7];
let bbb = [...numbers, ...aaa, "8"];
console.log(bbb);