import {useState, useEffect} from "react"

export function Game() {
    const [cookies, setCookies] = useState(0)

    useEffect(() => {
            
            const interval = setInterval(() => {
                // we can't do this because cookies was 0 when the interval started, so we'll always be setting cookies = 0 + 1
                // setCookies(cookies + 1) 
                // we can provide the setState a function that ensures react fetched the current state value before updating.
                setCookies((upToDateValue) => upToDateValue + 1)
            }, 1000)

            // when the compent unmounts, we're going to clear the interval so it stops running.
            // we return from the useEffect a 'clean-up' function that runs when the component is about to un-mount
            return () => clearInterval(interval)

    },[])

    return (
        <div>
            <p>Cookie Count {cookies}</p>
            <img onClick={() => {
              setCookies(cookies + 1)
            }}src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Cookie.png/1200px-Cookie.png'/>
        </div>
    )
}