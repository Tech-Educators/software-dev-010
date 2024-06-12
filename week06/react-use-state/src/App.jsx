import './App.css'
// imported this 'hook'
import {useState} from "react"
// 'hooks' are special functions react gives up to control things about our components. They start with 'use' 


export default function App() {
  // render = running a component again and re-running the html 

  // useState is a function that takes the initial value of the varible as it's argument. - useState returns two things - the value, and a function to update 'the' value

  // useState returns two things = the variable, function to update the varible.
  const [count, setCount] = useState(0)

  // the current value of count
  // a function to update the value of that count
  
  // the problem with this varible is that react doesn't know that it needs to update the DOM when this variable changes. 
  // let count = 0

  return (
    <>
    <p>The count is: {count}</p>
    <button onClick={() => {
      setCount(count + 1)
      console.log(count)
    }}> +1 </button>
    </>
  )
}

