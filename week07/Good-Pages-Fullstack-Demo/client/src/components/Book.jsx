// represents one of the books in our database
export function Book({book}) {
    return (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <img src={book.img_url} />
            {book.genres.map((genre) => {
            return <p>{genre}</p>
           })}
        </div>
    )
}