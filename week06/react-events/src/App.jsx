import './App.css'
import { Button } from './components/Button'

// the empty <>'s are called 'fragments'
function App() {

  let joke1 = 'Why don’t scientists trust atoms? Because they make up everything!'
  let joke2 = 'Why did the scarecrow win an award? Because he was outstanding in his field!'
  let joke3 = 'What do you call fake spaghetti? An impasta!'
  let joke4 = 'Why don’t skeletons fight each other? They don’t have the guts.'
  let joke5 = `What do you call cheese that isn't yours? Nacho cheese!`

  return (
    <>
    {/* The button component will receive an object like this {joke: 'blah blah'} */}
      <Button joke={joke1}/> 
      <Button joke={joke2}/> 
      <Button joke={joke3}/> 
      <Button joke={joke4}/> 
      <Button joke={joke5}/> 
    </>
  )
}

export default App
