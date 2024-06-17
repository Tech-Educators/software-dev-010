import {useState} from "react"
export function ComplexForm() {
    const [formData, setFormData] = useState({
        movieName: '',
        actorName: '',
        yearReleased: ''
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    console.log(formData)
    return (
        <div>
            <form>
                <input onChange={handleChange} name='movieName' placeholder="movieName"/>
                <input onChange={handleChange} name='actorName' placeholder="actor"/>
                <input onChange={handleChange} name='yearReleased' placeholder="year"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}