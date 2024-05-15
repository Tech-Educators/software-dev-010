let hobbieContainer = document.getElementById('hobbies-container') // null
// 1. fetch data
// 2. and array of objects
// 3. loop through that array and use DOM manipulation to display the data.


let hobbies = ['Fighting Games', 'Films', 'Programming', 'Baldurs Gate 3', 'wasting time on my phone', 'so many things', 'wow!']

// console.log(hobbies[0])
// console.log(hobbies[1])
// console.log(hobbies[2])

// hobbies.length = 3

for (let i = 0; i < hobbies.length; i++) {
    // create element (h3)
    let h3 = document.createElement('h3')  // <h3></h3>
    // set the content of that h3 = hobbies[i]
    h3.innerText = hobbies[i] // <h3>Fighting games</h3>
    // append that h3 to my hobbies container
    hobbieContainer.appendChild(h3) // to the hobbiesContainer, append as a child the h3 we just made.
    console.log(hobbies[i])
}

// 0
// 1
// 2


// When we see this in our console: Uncaught TypeError: Cannot read properties of null (reading 'appendChild')

// there are a few possible reaons: 
// forgot to link javascript?
// forgot to put a 'defer' attribute in our script tag.
// or we made a typo when selecting the element (curse those 's''s)


// addEventListerns in JS 

// new Array != let x = []

// new A


function runAnimals(animalFunc) {
    animalFunc()
}

runAnimals(chicken)
runAnimals(fox)


function chicken() {
    console.log('chicken clucks')
}

function fox() {
    console.log('What do they sound like???!')
}


let array = [1,2,3,4,5]

console.log()
let reduced = array.reduce(reducerFunc, 0)
console.log(reduced)

function reducerFunc(previousValue, CurrentValue) {
    
    return previousValue + CurrentValue
}

// given an strings of numbers /9999999
// (000) 000-00000


six(times(seven()))