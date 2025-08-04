//sound alert by jesse grum fom pixaby/

const start = 3;
const end= 0;
var alert = new Audio ("./assets/8-bit-video-game-fail-version-2-145478.mp3")
//referencing the audio in () makes it an object? 
let manualPause= false 
let isPaused = false


function playAudio() {
    alert.play();
}

function pauseCountDown () {
    if (!isPaused) {
        console.log ("I've been paused, homie", i);
        setTimeout(() => {countDown(i - 1)}, 1000)
    } else {
        countDown(i)
        console.log ("uh?");
    }



function countDown(i) {
   if (i < 0) return; 
   document.getElementById("numbers").textContent = i;
    console.log(i);

 if (i === 0) {
    alert.play()
   alert.loop = true;

  
 //stop the alert from playing after 8 seconds if manual pause is not pressed
    setTimeout(() => {
        if (!manualPause) {
            alert.pause()
            alert.currentTime = 0
        }
    }, 8000);
    

//stop the countdown here...?
return;
}
    setTimeout(() => {
        countDown(i-1)
    }, 60000); 
    // minute in milliseconds between count down #s
}

//DomContentLoaded makes sure this runs after the DOM loads first
document.addEventListener("DOMContentLoaded", () => { 
    document.getElementById("start-btn").addEventListener("click", () => {
    countDown(3);

});
document.getElementById("b-button").addEventListener("click", () => {
        countDown.currentTime = i;
        isPause = true
});
document.getElementById("a-button").addEventListener("click", () => {
        alert.pause()
        alert.currentTime = 0;
        manualPause = true
});
});
