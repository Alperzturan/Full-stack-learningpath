const clock = document.getElementById("clock");
let counter = 0;

Clock(clock);

function Clock(clock){
    let objectTime = new Date();
    clock.textContent = objectTime.toLocaleTimeString();
    setTimeout(() => {Clock(clock)}, 1000)
}