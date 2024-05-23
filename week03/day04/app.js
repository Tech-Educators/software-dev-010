
// I know I will need to display the current count in my p tag, so I'll fetch it by it's id.

const cookieCountElem = document.getElementById('cookie-count')

// I also need a varible that stores the current amount of cookies

let cookie = 0;

setInterval(function() {
    cookie += 1
    // console.log(cookie)
    cookieCountElem.innerText = cookie
    // updateElements()
}, 1000)

// function updateElements() {
//     cookieCountElem.innerText = cookie
// }

// setInterval takes two arguments - the function to run, and how often to run it in miliseconds.
// setInterval(function() {}, 1000)

// setTimeout

// function to run, and how long to wait to run that function.

const button = document.getElementById('button')

button.addEventListener('click', function() {
    setTimeout(function() {
        alert('You thought the button broke right? hahahahahaaha')
    }, 3000)
} )

button.addEventListener('click', function() {
    logsParam('Hello')
})


function logsParam(param) {
    console.log(param)
}

button.classList.toggle()