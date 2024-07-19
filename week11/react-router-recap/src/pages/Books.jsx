import { Link } from "react-router-dom"
export default function BookPage() {
    const arrayOfBooks = [
        'Othello',
        'Merchant of Venice',
        'Romeo and Juliet',
        'Twelfth Night',
        'The tempest',
        'Much Ado About Nothing'
    ]
    return (
        <div>
        {arrayOfBooks.map(book => (
            <div>
            <Link to={`/books/${book}`}>{book}</Link>
            <br />
            </div>
        ))}
        </div>
    )
}
