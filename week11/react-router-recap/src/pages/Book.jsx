import { useParams } from "react-router-dom"

export default function Book() {


    function fetchData() {
        // fetch book stuff
    }
    const {id} = useParams()
    return (
        <div>
            <p>This is the book route</p>
            <p>{id}</p>
        </div>
    )
}