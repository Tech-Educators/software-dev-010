import { useState, useEffect } from "react";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(1);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + cps);
    }, 1000);

    // clear the interval
    return () => {
      clearInterval(myInterval);
    };
  }, [cps]);

  function increaseCookies() {
    setCookies(cookies + 1);
  }

  function buyUpgrade() {
    setCps(cps + 1);
  }

  return (
    <div>
      <h1>Cookie Clicker Demo</h1>
      <button onClick={increaseCookies}>I am a cookie</button>
      <p>Cookies: {cookies}</p>
      <p>Cookies Per Second (cps): {cps}</p>
      <button onClick={buyUpgrade}>Buy Upgrade</button>
    </div>
  );
}
