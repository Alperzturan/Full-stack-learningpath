const img = document.querySelectorAll("img");
let page = 0;
let interval;
let path;

function slide(path){
    if(page == img.length){
        page = 0;
    }else if(page == -1){
        page = img.length-1;
    }
    img[page].classList.add("sDisplay");
    if(path == "right"){
        interval = setInterval(right, 3000);
    }else{
        interval = setInterval(left, 3000);
    }
    
}
function right(){
    img[page].classList.remove("sDisplay");
    clearInterval(interval);
    page++;
    path = "right";
    slide(path);
}
function left(){
    img[page].classList.remove("sDisplay");
    clearInterval(interval);
    page--;
    path = "left";
    slide(path);
}
