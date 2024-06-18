// we start with useState, becuase I'm going to need
// it for setting the state of my input fields. 

import {useState} from "react"

export function SimpleComplexForm() {
    const [data, setData] = useState({
        userName: '',
        userPass: ''
    })


    // the event object is just infromation about the even that just happened. 
    // event.target - what element did the event happen on.
    // event.target.value -- what did the user type into the input 
    // event.target.name -- the 'name' attribute on the input currently being typed in. 
    function handleChange(event) {
        // const {name, value} = event.target
        // console.log(event)
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    console.log(data)

    return (
        <div>
            <input onChange={handleChange} placeholder="enter some text" name="userName"/>
            <input onChange={handleChange} placeholder="enter your password" name="userPass"/>
        </div>
    )
}


// input fields must have a name attribute 
// the name is going to be the key in the object.
// suggest that your state variable starts off as an object with the same key names as the names of your input fields. 