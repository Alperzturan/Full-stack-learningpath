let inp;
let age = window.prompt("How old are you")
console.log(age)
//input string olarak alınır 

let x = "pizza"
let y = "pizza"
let z = "pizza"

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof(x), y, typeof(y), z, typeof(z), )

document.getElementById("but").onclick = function(){
    inp = document.getElementById("in").value;
    document.getElementById("h").textContent = `Hello ${inp}`;
}