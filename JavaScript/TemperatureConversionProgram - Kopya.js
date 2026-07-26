const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const inp = document.getElementById("in");
const but = document.getElementById("but");
const secret = document.getElementById("secret");
const back = document.querySelector(".back");

but.onclick = function(){
    let temp = inp.value;
    secret.style.display = "block";
    if(r1.checked){
        let difTemp = temp * 1.8 + 32;
        difTemp = +difTemp.toFixed(1);
        secret.textContent = difTemp+" F";
    }else if(r2.checked){
        let difTemp = temp / 1.8 + 32;
        difTemp = +difTemp.toFixed(1);
        secret.textContent = difTemp+" C";
    }else{
        secret.textContent = "You did not choose any conversion type";
    }
}