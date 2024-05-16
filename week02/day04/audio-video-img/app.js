const gooseSounds = document.getElementById('goose_sounds')

const playBtn = document.getElementById('playBtn')
const pauseBtn = document.getElementById('pauseBtn')
const stopBtn = document.getElementById('stopBtn')
const rewindBtn = document.getElementById('rewind')
const skipBtn = document.getElementById('skipBtn')

console.dir(gooseSounds)

// anonymous functions are functions without a name. 
// we often give them to things like 'addEventListner' or whenever we are not planning on using that function again elsewhere. 

// addEventListener takes two arguments: the event you're listening for, and a 'callback' function. 

playBtn.addEventListener('click', function() {
    gooseSounds.play()
}) 

pauseBtn.addEventListener('click', function () {
    gooseSounds.pause()
})

stopBtn.addEventListener('click', function() {
    gooseSounds.pause()
    // we can directly change the time property with javascript 
    gooseSounds.currentTime = 0;
})

//rewindBtn

// write the section on skipping back by 10's
