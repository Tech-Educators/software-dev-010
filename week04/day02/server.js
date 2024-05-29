// import express into this file
import express from "express"

// set up express so we can use it's functions
const app = express()
const PORT = 8080;

// to allow our server to read incoming JSON (from the request.body from the client)

// this line allows the server to read incoming JSON.
app.use(express.json())

// always use the app object
// and then a method - the method name will be whatever http method you're trying to responsd to
// first part is the route we want to reponse to the user going to
// second arg is the function to run when the user sends a get request to that route
// single / is the root route 
app.get('/', function(request, response) {
    // sending back plain text
    response.send(`You're looking at the root route! How roode`)
})

app.get('/cats', function (request, response) {
    // send back json
    response.json({"catFact": "Cats are believed to be the only mammals who don’t taste sweetness."})
})

app.get('/fish', (request, response) => {
    response.json({"fishFact": "Something something"})
})

// write a few get routes - the server should send a fun fact back.
// test by going to localhost:8080/cats eg
// remember to reboot the server after making changes! ctrl+c to stop the process and node server to start it
// one for cats
// one for dogs
// one for parrots
// one for crocs (shoes or animal)

// POST http method

// difference with post is that I want the information the client sent - so for the first time, we're going to use the request object.
app.post('/cats', function(request, response) {
    console.log(request.body)
    response.json({"you sent this info to me:" : request.body})
})

// we are going to listen for incoming request on port 8080
// my server is running on localhost:8080
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})
