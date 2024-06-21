import {Routes, Route, Link} from "react-router-dom"
import { About } from "./pages/About"
import {Home} from "./pages/Home"

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
        <Route path='/books' element={<h2>This is totally a rad book gallery! </h2>} />
      </Routes>
    </div>
  )
}