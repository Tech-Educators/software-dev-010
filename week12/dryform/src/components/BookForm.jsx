export function BookForm({action, params}) {
    let bookInfo = null
    if (params) {
        bookInfo = params.book_id // fetch info from database.
        // do sql query to get book information from database. 
    }
    return (
        <form action={action}>
            <input name='title' placeholder="title" defaultValue={bookInfo}/>
            <button type="submit">submit</button>
        </form>
    )
}