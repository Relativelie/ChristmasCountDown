function calculateDaysBeforeChristmas() {
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;


    const Christmas = new Date("December 25, 2021, 2021 19:45");
    const today = new Date();
    const difference = Christmas - today;



    let days = Math.floor(difference / msInDay);
    document.querySelector(".days").textContent = days;

    let hours = Math.floor(difference % msInDay / msInHour);
    document.querySelector(".hours").textContent = hours;


    let minutes = Math.floor(difference % msInHour / msInMinute);
    document.querySelector(".minutes").textContent = minutes;


    let seconds = Math.floor(difference % msInMinute / msInSecond);
    document.querySelector(".seconds").textContent = seconds;

    if (difference <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerOn);
        merryChristmas();
    }
};

let timerOn = setInterval(calculateDaysBeforeChristmas, 1000);


function merryChristmas() {
    document.querySelector(".header h1").textContent = "MERRY CHRISTMAS! HO-HO-HO!";
    document.querySelector(".header h1").classList.add("redText");
}

let playOnOff = false;
const playButton = document.querySelector("button");
playButton.addEventListener("click", function () {
    if (playOnOff === false) {
        document.querySelector("#myAudio").play();
        playOnOff = true;
        document.querySelector("button img").src = "pauseicon.png"
    }
    else {
        document.querySelector("#myAudio").pause();
        playOnOff = false;
        document.querySelector("button img").src = "playicon.png"
    }
})