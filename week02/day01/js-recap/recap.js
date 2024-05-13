console.log('HELLO, WORLD!')

// varibles

// let allows you to reassign values
// we assign values with a single = 

let myVarName = 52342;
myVarName = 'Sam'
console.log(myVarName) // 'Sam'

// we cannot reassign with const 

const forEverAndEver = 'nothing because we will experience heat death'
// forEverAndEver = 'new universe' // cannot run this line of code because I'm trying to change the value of forEverAndEver
console.log(forEverAndEver)

console.log('Hello')


// strings are just a collection of characters 

let myFirstString = 'this is a string'
let mySecondString = "THis is also a string!! 5342"
let myFinalString = `this is also a string in cool backticks.`

// string literals

let myPet = 'Charlie'
let myFavColour = 'Red'

// annoying!
console.log("My fav dog (don't the others' is called: " + myPet + ' and my fav colour is ' + myFavColour)

// string literals 
console.log(`My fav dog (don't the others' is called: ${100 + 100} and my fav colour is ${myFavColour}`)


// numbers are number!
const theTemp = 4034000000

// maths operators
console.log(42+42)
// bid/bodmas still applies: 
console.log(42 - (42 * 3))
console.log(42/42)
console.log(42*42)

// modulo
let remainder = 5 % 2


// Boolean values: 
const theTruth = true;
const thelie = false;


let counter = 10;

counter = counter + 1 // 11
// ++ adds 1 to a value
counter++  // 12
counter += 5 // 17
counter = counter + 5 // 22

counter = counter - 1 // 21
counter-- //20


console.log(counter)


// functions - are a way to make repeatable/reusable lines of code. 

// write the word function
// then the name of the function with parenthesis ()'s
// then space and some curly brackets.

// here we are declaring/creating a function.
function greet() {
    console.log('Hello, this is a long senteance! blhasf asdfasdf asdfasdf')
    console.log('Goodbye!')
}

// once we've made a function we invoke/call the function as many times as we like. We do that by writing the function name and parenthesis.

greet();
greet();


// more useful function: 

// here we are declaring/creating a function with a 'paramater'
// 'name' is the paramater of the funciton
// value that can change.

function greet(name) {
    console.log(`Hello, ${name}`)
}

// once we've made a function we invoke/call the function as many times as we like. We do that by writing the function name and parenthesis.

greet()

// we give it an 'arugment' that changes the value of the paramter.
greet('Sam');
greet('Hannah');
greet(52 + 8)


function sum(number1, number2) {
    console.log(number1 + number2)
}


sum(5,6)
sum(2341234,12312312)






// given a list of numbers, from 0 to 10. If a number is divable by 3, print 'fizz' to hte console, if by 5 print 'buzz' to hte console, if by both print 'fizzbuzz', otherwise print nothing. 