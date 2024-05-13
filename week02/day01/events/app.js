// get the button from my html
let button = document.getElementById('btn')

// add an event listener.
// the first argument the addEventListner function takes is the type of event we're listening for.
// the second argument add event listner takes is a function.
button.addEventListener('click', handleClick)

function handleClick() {
    console.log('Log!')

    document.body.style.backgroundColor = 'red'
    
    // if (document.body.style.backgroundColor === 'white') {
    //     document.body.style.backgroundColor = 'blue'
    // } else if (document.body.style.backgroundColor == 'blue') {
    //     document.body.style.backgroundColor = 'white'
    // }
}




function createPizza(typeOfPizza) {
    // do a bunch of steps to make pizza

    console.log(`Your ${typeOfPizza} pizza is ready! `)
}

createPizza('Cheese')
createPizza('Margherita')
createPizza('Anchovies')
createPizza('Vegetable')