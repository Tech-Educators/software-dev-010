// Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:

// Block scope - variables are accessible in the block they're in
// Function scope - variables are accessible in the function they're in
// Global scope - varibles are accessable anywhere.

let globalVar = 'This is global'

function thisIsHidden() {
    let functionScope = "This is hidden"
    console.log(globalVar)
}

thisIsHidden()


function timesByANumber(num) {
    let myNumber = 5;
    return num * myNumber
}


if (true) {
    let blockScope = 'Hello!'
    console.log(blockScope)
}

console.log(blockScope)