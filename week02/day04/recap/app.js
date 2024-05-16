// variables
let a = 'we can reassign the value of a let'
const b = 'we cannot reassign the value of a constant'

a = 'this is a new value'

//b = 'this is a new value' // causes an error 'cannot reassign the value of a constant' 

console.log(a) // 'this is a new value'


// operators

// = // assignment operator *setting* something equal to something.
// == // check if a value is equal to another value
// === // checks if the value is the same & check the data type is the same- 

'5' == 5 // true
5 === '5' // false


// logical operators
// !  ->  NOT 
// !=  -> NOT EQUAL TO
// && -> one thing AND another need to be true
// ||  -> OR

// maths operators
// - -> substract
// + -> add
// * -> multiply
// / -> divide

// 2 % 2 -> 0
// 5 % 3 -> 2

// check if a number is even
// number % 2 === 0 (if true, means the number is even.)

let randomNumber = prompt('Enter a number between 1 - 5')


while (!(randomNumber == 5)) {
    randomNumber = prompt('Enter a number between 1 - 5')
    if (randomNumber == 5) {
        alert('you got it right!')
    }
}

let username;
// if the user name is tim they will run the code in the while loops
while (username == 'tim') {
    // do some code 
    break;
}

// if the user name is *NOT* tim they will run the code in the while loops
while (!(username == 'tim')) {
    // do some code 
    break;
}

// const isLoggedIn = checkUserloggedIN() // true or false
// while (isLoggedIn === false && colorTheme === dark) {
//     // please log in code
//     break;
// }

// while (isLoggedIn === false || colorTheme === dark) {
//     // please log in code
//     break;
// }


// arrays 

let myDrinks = ['Red Bull', 'Coffee', 'Water']

console.log(myDrinks[0]);
console.log(myDrinks[1])
console.log(myDrinks[2])


let x = 0;
console.log(myDrinks[10-9]) // coffee
console.log(myDrinks[x]) // red bull

// for loops

// 3 statements seperated by ;'s
for (let i = 0; i < myDrinks.length; i++) {
    console.log(myDrinks[i])
}

// red bull
// water
// coffee