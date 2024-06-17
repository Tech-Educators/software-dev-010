import {useState} from "react"
export function SimpleForm() {
    const [userName, setUserName] = useState('')
    const [userLocation, setUserLocation] = useState('')
    return (
        <div>
            <form>
                <input onChange={(e) => {
                    setUserName(e.target.value)
                }} placeholder="enter your name"/>
                <input onChange={(e) => {
                    setUserLocation(e.target.value)
                }} placeholder="enter your location"/>
            </form>
            <p>Your name is {userName}</p>
            <p>Your location is {userLocation}</p>
        </div>
    )
}


// IN VANILLA JS
// const input = doucment.getElementById('input')

// input.addEventListener('change', (e) => {
//     username = e.target.value
// })