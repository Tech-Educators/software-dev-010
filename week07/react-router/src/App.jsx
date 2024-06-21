import {Routes, Route, Link} from "react-router-dom"
import { About } from "./pages/About"
import {Home} from "./pages/Home"

import BookPage from "./pages/BookPage"
import Book from "./pages/Book"

export default function App() {
  return (
    <div>
      <header>
        <h1>SPA AND react-router</h1>
       <ol>
        <li><Link to='/books'>Books</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/'>Home</Link></li>
       </ol>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/books' element={<BookPage/>}>
        </Route>
        <Route path='/books/:book_slug' element={<Book/>} />
      </Routes>
    </div>
  )
}

// /books/romeo-and-juliet
// /books/the-merchant-of-venice
// /books/othello