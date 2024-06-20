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

app.get('/books', async (req, res) => {
    // get all books
    const result = await db.query(`
        SELECT
        books.*,
        ARRAY_AGG(genres.name) AS genres
        FROM books 
        LEFT JOIN book_genres ON books.id = book_genres.book_id 
        LEFT JOIN genres ON genres.id = book_genres.genre_id
        GROUP BY
        books.id
    `)
    // const result = await db.query(`SELECT * FROM books`)
    // come back to this in week 11??
    res.json(result.rows)
})


app.post('/books', async (req, res) => {
    console.log('REQUEST BODY:', req.body)
    const {title, author, description, quote, released, img_url} = req.body
    // req.body = {
    //     title: '1 OR 1',
    //     author: 'somethingelse',
    //     description: 'blah blah blah',
    //     quote: 'Foo bar',
    //     released: Date.now(),
    //     img_url: 'https://something.png'
    // }
    const result = await db.query(`INSERT INTO books (title, author, description, quote, released, img_url) VALUES ($1, $2, $3, $4, $5, $6)`, [title, author, description, quote, released, img_url ])
    res.json({recordInserted: result})
})

app.get('/genres', async (req, res) => {
    const result = await db.query(`SELECT * FROM genres`)
    res.json(result.rows)
})

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})



// all user info 
// only one users information