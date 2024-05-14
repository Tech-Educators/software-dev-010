// recap on if statements

if (somethingistrue) {
    console.log(`Do the code inside the {}'s`)
} else if (somethingelseistrue && thisThingIsAlsoTrue) {
    // do this
} else {
    console.log('IF nothing else fits: do this')
}

// write an if statment that checks if the user is over the age of 18, and under the age of 56.
let userAge = 3 

if (userAge < 18) {
    console.log('You are under 18')
} else if (userAge  >= 18 && userAge  < 56) {
    console.log('Look at you! Living!')
} else {
    console.log('You are for sure old enough!')
}

// if they're under, log something
// between 18 && 56, log something
// if over, log something else. 


// declaration - we're defining/creating a function.

function weatherChecker() {
    let currentWeather = 'rainy'

    if (currentWeather == 'sunny') {
        console.log('Get some sunscreen')
    } else if (currentWeather == 'snowy') {
        console.log('Ice cold!')
    } else if (currentWeather == 'foggy') {
        console.log('Cant see infront of me!')
    } else if (currentWeather == 'rainy') {
        console.log('Do you have an umbrella?')
    } else {
        console.log('Are you on mars?')
    }
}



