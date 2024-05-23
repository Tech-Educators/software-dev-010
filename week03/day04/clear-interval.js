const button = document.getElementById('button')
const stopButton = document.getElementById('stopButton')

const pTag = document.getElementById('cookie-count')
let count = 0;

let interval = ''

button.addEventListener('click', function() {
    interval = setInterval(function() {
        count += 1
        pTag.innerText = count
    }, 1000)
})

stopButton.addEventListener('click', function() {
    clearInterval(interval)
})