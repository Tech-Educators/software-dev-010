import {useState, useEffect} from 'react'

export function Game() {
    const [cookies, setCookies] = useState(0)
    const [special, setSpecial] = useState(true)
    // [theStateVaraible, functionToUpdateState]
    // the argument we give to useState defines the value of the stateVariable to start with.
    // do not update the value of a state variable 
    // use the updater function.
    console.log('😵‍💫')

    useEffect(() => {
        console.log('👺')
    }, [special])
    // useEffect is a function that two arguments
    // a function to run 
    // and a 'dependency' array.
    // we use the dependency array to control when the code inside the useEffect runs.
    // if we pass no dependency array, the effect happens every time the componenter renders (USELESS!!)
    // if we pass an emmpty dependency array, the effect happens when the component first runs/mounts
    // if we pass a variable into the dependency array, react 'watches' that variable, and when it changes, re-runs the effect.

    console.log('😵‍💫')
    // i know that I need to use setInterval
    
    // const interval = setInterval(() => {
    //     setCookies(cookies + 1)
    // }, 1000)
    //made something
    //delete the thing 
    
    return (
        <>
        <h2>Cookie clicker: </h2>

        <p>{cookies}</p>
        <button onClick={() => {
            setCookies(cookies + 1)
        }}>Add cookie</button>
        <button onClick={() => {setSpecial(!special)}}>Click me to run the effect</button>
        </>
    )
}