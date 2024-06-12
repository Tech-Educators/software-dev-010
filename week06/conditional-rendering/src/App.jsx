import {useState} from "react"
import "./App.css"

export default function App() {
  const [monkeyShowing, setMonkeyShowing] = useState(false)

  // so conditional rendering is to condtionally show parts of our html -

  // like 'if the user has clicked this button' 
  return (
    <div>
      {/* <button onClick={() => setMonkeyShowing(!monkeyShowing)}>surprise!!!</button> */}
      <button onClick={() => setMonkeyShowing(true)}>surprise!!!</button>
      {monkeyShowing && <img src='https://media.cnn.com/api/v1/images/stellar/prod/160107100400-monkey-selfie.jpg?q=w_2912,h_1638,x_0,y_0,c_fill' alt='monkey no rights :(' />}
    </div>
  )
} 

// javascript has something called 'truthy' values