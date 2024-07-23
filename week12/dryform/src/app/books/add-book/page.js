import { BookForm } from "@/components/BookForm";

export default function Page() {
    const handleSubmitBook = async () => {
        'use server'
        console.log('submitting new book..')
    }
    return (
        <div>
            <BookForm action={handleSubmitBook} />
        </div>
    )
}