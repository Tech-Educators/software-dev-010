import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    response.json(`You're at the root route`)
})

app.get('/comments', (request, response) => {
    response.json({comment: "this is a comment from someone online. they're writing interesting scientifc facts about fleas"})
})

// write a post route to /comments that the server responsds with what the user sent in the request.body
app.post('/comments', (request, response) => {
    console.log(request.body)
    response.json({"You sent this data to the server:" : request.body})
})

app.listen('8080', () => {
    console.log('Server running on port 8080')
})


// we're going to write a backend that allows the user to fetch a comment

// and allows a client to send a comment to the server