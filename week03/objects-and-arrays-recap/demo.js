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



let perfectBlue = {
        name: 'Perfect Blue', 
        year: 1997
}

perfectBlue.name // 'Perfect Blue"
perfectBlue.year // 1997

// create html tags
let header = document.createElement('h2')
let pTag = document.createElement('p')

// give the header and pTag content.
header.textContent = perfectBlue.name
pTag.textContent = perfectBlue.year

// last step - add it to the dom (actually add it to our html)
let container = document.getElementById('movie-info')

container.appendChild(header)
container.appendChild(pTag)


// create an object with 3 properties
// create html tags for the 3 propties
// display them on the dom.


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