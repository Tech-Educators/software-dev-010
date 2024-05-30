// i've installed two packages and I want to be able to use them
import express from "express"
import cors from "cors"

// I've created an app object by invoking/call the express function we imported
const app = express()

// i need my express server to be able to read incoming JSON from the client. 
app.use(express.json())
app.use(cors())


// when someone makes a get request to the root - LocalHost:6060
app.get('/', function(request, response) {
    response.json({"Message:": "You're looking at my root route. How roode!"})
})

// when someone makes a get request to comments - LocalHost:6060/comments
app.get('/comments', function(request, response) {
    response.json({
        id: "1",
        userName: "leethaxor1",
        location: "The cafe across the street",
        content: "Can you guys please enable cors"
    })
})

// REST - A way of writing APIS

app.post('/comments', function (request, response) {
    // before, I didn't need to know much about what the user(client) was sending. But now, I want to see the comment they've sent. 
    console.log(request.body)
    // for now, the function will just respond back with the information the client sent.
    // when the client send a lot of information (like a comment) they will send it in the request.body
    response.json({"The client sent me this in the request.body" : request.body})
})

let request = {
    body: {
        asdfasdf: 'sdf'
    }
}

// listen takes two arguments
// the port I want my server to listen to
// a function to run when it starts listening
// ctrl + c 
app.listen(6060, function() {
    console.log('Server running on port 6060')
})






// /comments
// get - >
// post ->
// delete ->







// insert varaibles into strings

// let myName = 'tom'
// // we have to use backticks for template literals
// `${myName} hello ${asdfasdf} asdfasdf more to say`
// // same result
// "hello to you, " + myName + ' and this is even more text' + asdf 

// let sam = {
//     // an object is a collection of key/value pairs
//     // objects can have keys that are a value of a function
//     // methods are functions that live inside objects.
//     name: 'Sam',
//     age: 25,
//     calcFavNumber: function() {
//         return 2 + 2
//     },
//     favouriteFave: calcFavNumber() //4
// }

// sam.name // sam
// sam.age // 25

// sam.greet()

// console.log()

// document.body.h2.classList.add()