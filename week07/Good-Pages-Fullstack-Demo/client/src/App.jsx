import {useState, useEffect} from "react"
import { Book } from "./components/Book"
import { BookForm } from "./components/BookForm"

export default function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])
  console.log(books)
  async function fetchBooks() {
    const result = await fetch('http://localhost:8080/books')
    const books = await result.json()
    setBooks(books)
  }

  return (
    <div>
      <BookForm/>
      <h1>Books:</h1>
      {books.map((book) => {
        return (
         <div>
           <Book book={book} />
         </div>
        )
      })}
    </div>
  )
}
