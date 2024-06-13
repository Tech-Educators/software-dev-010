import { useState } from "react";
const words = ["Coffee", "Tangerine", "Excelsior", "Yum"];

export default function App() {
  // const [stateVariable, mutationFunction] = useState(initialValue)
  const [count, setCount] = useState(0);

  // when we want to change state, we need to use the mutation function
  // we can't do
  // count = 1
  // but we CAN do
  // setCount(1)

  function increaseCount() {
    console.log("I am running");
    setCount(count + 1);
  }

  return (
    <div>
      <h1>State and Map, BFFs</h1>
      <p>{count}</p>

      {words.map((word) => {
        return (
          <button key={word} onClick={increaseCount}>
            {word}
          </button>
        );
      })}
    </div>
  );
}
