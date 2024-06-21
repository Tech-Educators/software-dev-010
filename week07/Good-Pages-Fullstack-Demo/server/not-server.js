import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { db } from "./utils/connect.js"

const PORT = 8080

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

app.get('/', (req, res) => {
    res.json({message: 'This is the root route. My server is working. Huzzah!'})
})


console.log('Hello')

function sum(a,b) {
    return a + b
}

console.log(sum(5,5))