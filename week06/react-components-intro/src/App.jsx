import { Gallery } from "./components/Gallery"

export default function App() {
  return (
    <div>
      <Gallery />
      {/* as an exercise, go create a header and footer component - they should be in seperate files in your components folder */}
      <Footer />
    </div>
  )
}

// react is declaritive - tell the code to figure out 'how' to do something

// vanilla JS is imperative - tell the code exactly what to do.