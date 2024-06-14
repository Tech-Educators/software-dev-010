import { useState, useEffect } from "react";
const upgrades = [
  {
    id: 1,
    name: "Auto-Clicker",
    cost: 100,
    increase: 1,
  },
  {
    id: 2,
    name: "Enhanced Oven",
    cost: 500,
    increase: 5,
  },
  {
    id: 3,
    name: "Cookie Farm",
    cost: 1000,
    increase: 10,
  },
];

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

  function buyUpgrade(increase, cost) {
    // get more cps
    setCps(cps + increase);
    // but it costs us cookies
    setCookies(cookies - cost);
  }

  return (
    <div>
      <h1>Cookie Clicker Demo</h1>
      <button onClick={increaseCookies}>I am a cookie</button>
      <p>Cookies: {cookies}</p>
      <p>Cookies Per Second (cps): {cps}</p>
      {/* <button onClick={() => buyUpgrade(1, 100)}>Auto-Clicker</button> */}

      {upgrades.map((upgrade) => {
        return (
          <button
            key={upgrade.id}
            onClick={() => buyUpgrade(upgrade.increase, upgrade.cost)}
          >
            {upgrade.name}
          </button>
        );
      })}
    </div>
  );
}
