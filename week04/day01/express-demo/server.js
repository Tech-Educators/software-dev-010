// import express into this file of code.
import express from "express"

// instatsiate my app
const app = express()

// I'm listening for a get request
// app.get()

// Where am I listening for the get request?
// app.get('/cats')

// What to do when I get that request?
// I want to run a function.
// the callback function automatically get access to two paramaters
// both of these are objects
// the request object contains information about the request 
// response object has functions for us to use to send back a response

// localhost:8080/cats
app.get("/cats", function(request, response) {
    response.send('🐈')
})

// this is how we call tell the server to 'stay alive' and keep listening for incoming requests.
app.listen('8080', function() {
    console.log('Server now running and listening on port !!!!')
})

