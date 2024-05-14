function sayHello() {
    console.log('Hello')
}

function sayGoodbye() {
    return 'Goodbye'
}

function sum(a,b) {
    return a + b
}

let fiveAndFive = sum(5,5) //10
let tenAndTen = sum(12,12) //24


// This looks crazy, but it works!
// let theRealResult = sum(fiveAndFive, tenAndTen)
let theRealResult = sum(sum(5,5), sum(10,10)) // 30
console.log(theRealResult)
                    // sum(10,20 )
// What return does:
// Returning a value from a function allows use to store that final value in another variable, 

// Why we would use it
// so that we can seperate our functions out into having 'key' responsibilities 
// and use the functions to store values in variables/ or even in other functions

// Why we can't write more code under it.
// so that we can do some more complex like 'returning early' in error-handling
// also because it's just the 'result' of the funciton. 

function live() {
    let bread = buysBread() // this is undefined, because I didn't reaturn my bread.
    eatFood(bread)
}

function buysBread() {
    // 1. document.getOnBike() 
    // 2. let route = findWayToStore()
    // 3. followPath(route)
    // other steps to buy bread
    // console.log(bread)
}

function findWayToStore() {
    // calculates the map routes. 
    return mapData
    
}