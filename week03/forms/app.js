const form = document.getElementById('form')

// we have to pass afunction to .addEventListner as it's second argument

// we can either reference a function we've written somewhere else - like handleSubmit below
form.addEventListener('submit', handleSubmit)


// when we work with forms, we need to prevent the default action from happening -.
function handleSubmit(event) {
    // below line stops the page refreshing
    event.preventDefault()

    // formData is a special type of object that is your form data.
    const userInput = new FormData(form)
    // okay, I have my annoying formData object, but now I want it it in a normal object please
    console.log(userInput)

    // we do that with this line:
    const userInputInObject = Object.fromEntries(userInput)

    console.log(userInputInObject)
    console.log(event.target.email.value)
    console.log('submitted the form')
}



// or we can just write a anonymous function straight away like we did below.
// form.addEventListener('submit', function() {
//     handleSubmit('Hello')
// })

// we cannot use parenthesis (because we'd be invoking the function) - the js wouldn't wait for the 'submit' event to happen, it would just run the function immediatly. 
// form.addEventListener('submit', handleSubmit())

// form.addEventListener('submit', function() {
//     console.log('hello')
// })