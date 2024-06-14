import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // we are setting our interval and giving it a name so we can kill it later
    const myInterval = setInterval(() => {
      console.log("yo yo");
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    // we need to return the clearInterval so that the useEffect doesn't keep adding new timers
    // if we don't we will have a new timer every time it runs, and it CAN get very unruly
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <div>
      <h1>Timers in React</h1>
      <p>{count}</p>
    </div>
  );
}
