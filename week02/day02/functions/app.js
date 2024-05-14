console.log('Hello!')


// defining a function.
// function weatherChecker() {
//     let currentWeather = 'rainy'

//     if (currentWeather == 'sunny') {
//         console.log('Get some sunscreen')
//     } else if (currentWeather == 'snowy') {
//         console.log('Ice cold!')
//     } else if (currentWeather == 'foggy') {
//         console.log('Cant see infront of me!')
//     } else if (currentWeather == 'rainy') {
//         console.log('Do you have an umbrella?')
//     } else {
//         console.log('Are you on mars?')
//     }
// }

// how to call a function 
weatherChecker()


// giving a function parameters
function weatherChecker(currentWeather) {
    // let currentWeather = 'rainy'

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

// calling a function with arguments.
weatherChecker('snowy') // currentWeather = 'snowy'
weatherChecker('sunny') // currentWeather = 'sunny'