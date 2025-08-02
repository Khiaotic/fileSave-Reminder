//sound alert by jesse grum fom pixaby/

const start = 3;
const end= 0;
var alert = new Audio ("./assets/8-bit-video-game-fail-version-2-145478.mp3")
//referencing the audio in () makes it an object? 
// let text = document.getElementById("numbers").textContent
function playAudio(){
    alert.play();
}


function countDown(i) {
   if (i < 0) return; 
   document.getElementById("numbers").textContent = i;
    console.log(i);

 if (i == 0) {
    alert.play()
   alert.loop = true;

    //stop the alert from playing after 8 seconds
    setTimeout(() => {
        alert.pause()
        alert.currentTime = 0
    }, 8000);


//stop the countdown here...?
return;
}
    setTimeout(() => {
        countDown(i-1)
    }, 60000);
    // 60000 = 1 minute in milliseconds between count down #s
}

//DomContentLoaded makes sure this runs after the DOM loads first
document.addEventListener("DOMContentLoaded", () => { 
    document.getElementById("start-btn").addEventListener("click", () => {
    countDown(3);

});
});
