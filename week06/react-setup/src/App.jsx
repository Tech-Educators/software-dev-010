
// react functions (components) must be written in uppercase.
// And the file should also be uppercase.

// a component is a function that returns JSX. 
export default function App() {
  return (
    <div>
      <h2>Hello, react!</h2>
      <Header />
      <Footer />
    </div>
  )
}

export function Header() {
  return (
   <div>
     <h1>This is my header</h1>
      <p>asdfasdf</p>
   </div>
  )
}

export function Footer() {
  return (
    <div>
      <footer>This is a footer</footer>
    </div>
  )
}




