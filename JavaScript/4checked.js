const cb = document.getElementById("cb");
const rad1 = document.getElementById("rad1");
const rad2 = document.getElementById("rad2");
const rad3 = document.getElementById("rad3");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const but = document.getElementById("but");

but.onclick = function(){
    cb.checked ? p1.textContent = "You have been subbed!" : p1.textContent = "You have not been subbed!"
    
    if(rad1.checked){
        p2.textContent = "1ed"
    }
    else if(rad2.checked){
        p2.textContent = "2ed"
    }
    else if(rad3.checked){
        p2.textContent = "3ed"
    }

}