// get my header by it's id

let myH2 = document.getElementById('this-h2')

let p1 = document.getElementById('elem1')
let p2 = document.getElementById('elem2')
let p3 = document.getElementById('elem3')
let p4 = document.querySelector('.elem4')
let allClassStuffPlease = document.querySelectorAll('.elem4') // gives back a nodeList (fancy array)


console.log(myH2)
// change the text
myH2.innerText = 'Something else!'

// lets make a function that dynamically changes the text of an element.

//  parameters = element, newText
// change the elements text to the new text.

function changeText(element, newText) {
    element.innerText = newText;
}

// second step is 'invoking' or 'calling' the function!
// the 'actual' information for the function
// the value of the parameters (element, newText) becomes whatever I give as arguments.
changeText(p1, 'This was done with our cool function!')
changeText(p2, 'Wizards.... on a wednesday!?!')
changeText(p3, 'Look at the power of js! We can just reuse this')
changeText(p4, 'Something something something...')


// ARRAYS

// Arrys are a list of data
// it's another data type (just like numbers, strings, booleans)
// arrays are zero-indexed in javascript
let myArray = ['42', 42, true, 'seperated by commas']

console.log(myArray[0])
console.log(myArray[myArray.length - 1])