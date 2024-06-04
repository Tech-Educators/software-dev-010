let ourCohortsMovies = [
    {
        name: 'Perfect Blue', 
        year: 1997
    }, 
    {
        name: 'In Bruges',
        year: 2008
    },
    {
        name: 'Jurrassic Park',
        year:  1993
    }, 
    {
        name: 'Shutter Island',
        year: 2010
    },
    {
        name: 'Pulp Fiction',
        year: 1994
    }
]

// I want to display all this information on my page.

// Step 1: Loop through that array.
// in the loop body - create our html tags
// assign the value of the html tags to be the information in our object
// append to the DOM (html)



// write a function that takes an object
// creates the html tags
// appends to the dom (our html).




// perfectBlue.name // 'Perfect Blue"
// perfectBlue.year // 1997

// // create html tags
// let header = document.createElement('h2')
// let pTag = document.createElement('p')

// // give the header and pTag content.
// header.textContent = perfectBlue.name
// pTag.textContent = perfectBlue.year

// // last step - add it to the dom (actually add it to our html)
// let container = document.getElementById('movie-info')

// container.appendChild(header)
// container.appendChild(pTag)


let pulpFiction = {
    name: 'Pulp Fiction',
    year: 1994
}

let perfectBlue = {
    name: 'Perfect Blue', 
    year: 1997
}


// create an object with 3 properties
// create html tags for the 3 propties
// display them on the dom.

// paramaters are the placeholder for the eventual argument. (the real/final value)
function displayObject(object) {
    const nameTag = document.createElement('h3')
    const yearTag = document.createElement('p')

    nameTag.innerText = object.name
    yearTag.innerText = object.year

    const infoContainer = document.getElementById('movie-info-function')
    infoContainer.appendChild(nameTag)
    infoContainer.appendChild(yearTag)
}

// arugments are things we give to a function - they become the 'final' value of a parameter
displayObject(perfectBlue)
displayObject(pulpFiction)

displayObject({name: 'Primer', year: 2008})

displayObject({name: 'sam', animal: 'test'})


// create an array
// use a for loop to go through the array
// in the for loop make a p tag and set the text content to the string in that iteration of the array.
// append to the dom. 

// array = ['hello', 'how', 'are', 'you']

// for (let i = 0; something; sometthing) {
//     // make a p tag
//     // p.innerText = array[i]
//     // append to the dom
// }

const esports = ['League of Legends', 'Dota2', 'Volorant', 'CS:GO', 'Tekken 8']

const esportsContainer = document.getElementById('esports')

for (let i = 0; i < esports.length; i++) {
    let pTag = document.createElement('p')
    pTag.innerText = esports[i]
    esportsContainer.appendChild(pTag)
}


let h1 = document.createElement('h1')
document.body.appendChild(h1)


// write function that creates a button on the page - when you click the button it alerts the user theyve clicked a button.

// .addEventListener for this.
// create the button with javascript.


// addEventListern() (add it to the button variable) - it's takes as the first arguemnt the evet we're listening for and something called a 'callback function'.

// button.addEventListner('click', function() {
//    // figure out how to alert the user
//    // search : javascript alert function.
// }

function createButtonAndAlert() {
    // create the button

    const button = document.createElement('button')
    button.textContent = 'click me!'
    document.body.appendChild(button)

    // takes two arguments
    // we don't add parenthesis to the 'callback' function (handleClick) otherwise it would run itself immediately instead of waiting for the click event.
    button.addEventListener('click', handleClick)

    // we can write 'anonymous' functions straight in the event listener.
    button.addEventListener('click', function () {
        alert('You clicked me!')
    })

}

function handleClick() {
    console.log('A click happened so now Im running')
    console.log('Clicked!')
}

createButtonAndAlert()