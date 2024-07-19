import NavBar from "./components/NavBar"
import {Link, Route, Routes} from "react-router-dom"
import { About } from "./pages/About"
import {Home} from "./pages/Home"
import BookPage from "./pages/Books"
import Book from './pages/Book'

export default function App() {
  return (
    <div>
      <NavBar/>
      {/* might do this section in your nav bar if you wanted. */}
      {/* <Link to='/about'>About page</Link> */}

      {/* this is where we set up all the routes we want to be able to go to */}
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/books' element={<BookPage/>}/>
        {/* the colon at the begging of :book-slug tells react-router this is a dynamic route */}
        <Route path='/books/:id' element={<Book/>} />
      </Routes>
    </div>
  )
}