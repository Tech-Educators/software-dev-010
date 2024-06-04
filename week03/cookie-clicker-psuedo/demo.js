{/* <p id="cookie"></p>
<button id="startBtn">Start</button> */}

const cookiePTag = document.getElementById('cookie')
const startButton = document.getElementById('startBtn')
const resetButton = document.getElementById('reset')
let cookie = 1


function game() {
    // all operations i need to do every second
    setInterval(function() {
        cookiePTag.innerText = cookie += 1
    }, 1000) 
}

startButton.addEventListener('click', game)

resetButton.addEventListener('click', function() {
    cookie = 1
})