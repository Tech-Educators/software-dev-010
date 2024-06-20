import {useState, useEffect} from "react"

export function BookForm() {
    const [form, setFormData] = useState({
        title: '',
        author: '',
        description: '',
        quote: '',
        released: '',
        img_url: ''
    })

    function handleChange(event) {
        setFormData({
            ...form,
            [event.target.name] : event.target.value
        })
        console.log(form)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:8080/books', {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="book title" onChange={handleChange} name="title"/>
                <input placeholder="author" onChange={handleChange} name="author" />
                <input placeholder="descriptoin" onChange={handleChange} name="description"/>
                <input placeholder="quote" onChange={handleChange} name="quote"/>
                <input type="date" placeholder="released" onChange={handleChange} name="released" />
                <input placeholder="img_url" onChange={handleChange} name="img_url"/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
