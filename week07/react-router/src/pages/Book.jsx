import { useParams } from "react-router-dom"
export default function Book() {
    const {book_slug} = useParams()
    return (
       <>
        <p>{book_slug}</p>
        <p>Info</p>
       </>
    )
}