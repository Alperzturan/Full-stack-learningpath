let sayi = 0
const h = document.getElementById("h")
const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
h.textContent = sayi

b1.onclick = function(){
    sayi--;
    h.textContent = sayi
}
b3.onclick = function(){
    sayi++;
    h.textContent = sayi
}
b2.onclick = function(){
    sayi = 0;
    h.textContent = sayi
}