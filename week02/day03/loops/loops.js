
// for loops begin with the 'for' keyword. 
if (10 > 8) {
    console.log('Thats true!')
}

// a for loops ()'s have three parts. 
// a 'counter' varible
// ;
// a condition
// ;
// 'afterthought' or an increment/decrement. 


for (let counter = 0;          counter < 10;       counter = counter + 1) {
    console.log(counter)
    console.log('Hello!')
}

// the ssame as writing i = i + 1
for (let i = 0; i < 10; i++)  {
    // this is the more 'standard' way of writing a for loops.
}

// 0, 'hello
// 2, 'hello'
// 4, 'hello'
// 6
// 8


let five = 3

3 == 3
'3' === '5' // false

// write a loop that counts down
// when the count is 0, print to the console 'Happy new year 🎉' 


// 5
// 4
// 3
// 2
// 1
// 0
// 'Happy new year 🎉!' 

// looping 'backwards' 

for (let i = 5; i >= 0; i--) {
    
    console.log(`${i}...`)

    if (i === 0) {
        console.log('Happy new year 🎉!')
    }

    hello()
}

function hello() {
    // console.log(test)
}


console.log('five plus five is' + ('some'))
console.log(`five plus five is ${5 + 5}`)


// function  - I need some code that 'does one particular thing' that I can call and reuse anywhere
// let x = 5 - i need to store data that I can use in multiple places
// for - I need to do some code over and over again a set amount of times
// if - 'I might need something depending on some condition.'\



// While loops are a hybrid between if statements and for loops.

if (5 > 4) {
    console.log('5 is less than 4.')
}

// let counter = 0;

// while (counter < 10) {
//     console.log('Whoo')
//     counter++
// }

// let userLoggedIn = true
// while (!userLoggedIn) {
//     console.log('please sign in')
// }


let randomNumber = 0;

while (randomNumber != 5) {
    randomNumber = prompt('Pick a random number between 0 & 5')
}