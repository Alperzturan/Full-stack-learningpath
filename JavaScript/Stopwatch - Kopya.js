/* const time = document.getElementById("time");
let timeoutID;
let ms = 0;
let s = 0;
let m = 0;
let h = 0;

function startTimer(){
    ms++;
    if(ms == 100){
        s++;
        ms=0;
        if(s == 60){
            m++;
            s=0;
            if(m == 60){
                h++;
                m=0;
                if(h == 100){
                    resetTimer();
                }
            }
        }
    }
    time.textContent = `${h.toString().padStart(2,0)}:${m.toString().padStart(2,0)}:${s.toString().padStart(2,0)}:${ms.toString().padStart(2,0)}`;
    timeoutID = setTimeout(startTimer, 9);
}
function startButtonClick() {
    if (timeoutID) {
        return; 
    }
    startTimer();
}
function stopTimer(){
    clearTimeout(timeoutID);
    timeoutID = null;
}
function resetTimer(){
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    clearTimeout(timeoutID);
    time.textContent = "00:00:00:00";
    timeoutID = null;
} */


//With date
const time = document.getElementById("time");
let timer = null;
let elapsedTime = 0;
let startTime = 0;
let isRunning = false;

function startTimer(){
    if(!isRunning){
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTimer, 10);
    }
}
function stopTimer(){
    isRunning = false;
    elapsedTime = Date.now() - startTime;
    clearInterval(timer);
}
function resetTimer(){
    clearInterval(timer);
    elapsedTime = 0;
    startTime = 0;
    isRunning = false;
    time.textContent = "00:00:00:00"
}
function updateTimer(){
    const nowTime = Date.now();
    elapsedTime = nowTime - startTime;
    let h = Math.floor(elapsedTime / (1000 * 60 * 60));
    let m = Math.floor(elapsedTime / (1000 * 60) % 60);
    let s = Math.floor(elapsedTime / 1000  % 60);
    let ms = Math.floor(elapsedTime % 1000 / 10);

    time.textContent = `${String(h).padStart(2,0)}:${String(m).padStart(2,0)}:${String(s).padStart(2,0)}:${String(ms).padStart(2,0)}`;
}