const body = document.querySelector("body");
const watchBackground = document.querySelector("#watchBackground");
const watchFace = document.querySelector("#watchFace");
const clock = document.querySelector("#analog-clock");
const digital = document.querySelector("#digital-clock");
const digitalFace = document.querySelector("#digitalFace");
const pageBackgroundSelect = document.querySelector("#pageBackground");
const frame = document.querySelector('.frame');
const header = document.querySelector('#header');

const hours = document.querySelector(".hand.hours");
const minuts = document.querySelector(".hand.minuts");
const seconds = document.querySelector(".hand.seconds");
let count = 0;

watchBackground.addEventListener("click", () =>{
    frame.style.background = `url(${BG_arr[count]})`;
    frame.style.backgroundRepeat = "no-repeat";
    frame.style.backgroundPosition = "center";
    frame.style.backgroundSize = "cover";

count++;
if(count === BG_arr.length){
    count = 0;
}
})

watchFace.addEventListener("click", () =>{
    clock.style.background = `url(${BG_arr[count]})`;
    clock.style.backgroundRepeat = "no-repeat";
    clock.style.backgroundPosition = "center";
    clock.style.backgroundSize = "cover";

count++;
if(count === BG_arr.length){
    count = 0;
}
})

digitalFace.addEventListener("click", () =>{
    digital.style.background = `url(${BG_arr[count]})`;
    digital.style.backgroundRepeat = "no-repeat";
    digital.style.backgroundPosition = "center";
    digital.style.backgroundSize = "cover";

count++;
if(count === BG_arr.length){
    count = 0;
}
})

pageBackgroundSelect.addEventListener("click", () =>{
    body.style.background = `url(${BG_arr[count]})`;
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";
    body.style.backgroundSize = "cover";

count++;
if(count === BG_arr.length){
    count = 0;
}
})





const color_arr = {
    0  : "greenyellow",
    5  : "cyan",
    10 : "chartreuse",
    15 : "deeppink",
    20 : "gold",
    25 : "aquamarine",
    30 : "magenta",
    35 : "coral",
    40 : "rgb(2, 2, 197)",
    45 : "brown",
    50 : "burlywood",
    55 : "cornflowerblue",
};

const BG_arr = [
    "/tomDekelProject-main/pictures/pexels-pixabay-220182.jpg",
    "/tomDekelProject-main/pictures/portfoiliobg2.jpg",
    "/tomDekelProject-main/pictures/triangles-HQ.png",
    "/tomDekelProject-main/pictures/portfolioBG.jpg",
    "/tomDekelProject-main/pictures/galaxy.jpg",
    "/tomDekelProject-main/pictures/galaxy2.jpg",
    "/tomDekelProject-main/pictures/galaxy3.jpg",
    "/tomDekelProject-main/pictures/horizon.jpg",
    "/tomDekelProject-main/pictures/beachsunset.jpg",
]

function createClock() {
    for (let i = 0; i < 60; i++) {
        const div = document.createElement("div");
        div.innerHTML = '|';
        let number;

        switch (i) {
            case 0  : number = "<b>12</b>"; break;
            case 5  : number = 1; break;
            case 10 : number = 2; break;
            case 15 : number = "<b>3</b>"; break;
            case 20 : number = 4; break;
            case 25 : number = 5; break;
            case 30 : number = "<b>6</b>"; break;
            case 35 : number = 7; break;
            case 40 : number = 8; break;
            case 45 : number = "<b>9</b>"; break;
            case 50 : number = 10; break;
            case 55 : number = 11; break;
        }

        if (number) {
            const h2 = document.createElement("h2");
            h2.innerHTML = number;
            h2.style.rotate = `${360 - (i * 6)}deg`;
            h2.style.color = color_arr[i];
            div.appendChild(h2);
        }

        div.style.rotate = `${i * 6}deg`;
        clock.appendChild(div);
    }

    clockMotion();
    setInterval(clockMotion, 1000);
}



function clockMotion() {
    const now = new Date();

    const h = now.getHours() % 12;
    const m = now.getMinutes();
    const s = now.getSeconds();

    hours.style.rotate = `${h * 5 * 6 + (m / 2)}deg`;
    minuts.style.rotate = `${(m * 6) + (s / 10)}deg`;
    seconds.style.rotate = `${s * 6}deg`;


    const _h = h < 10 ? '0' + h : h;
    const _m = m < 10 ? '0' + m : m;
    const _s = s < 10 ? '0' + s : s;

    if (s % 2) {
        digital.innerHTML = `${_h}:${_m}:${_s}`;
    } else {
        digital.innerHTML = `${_h} ${_m} ${_s}`;
    }

}
