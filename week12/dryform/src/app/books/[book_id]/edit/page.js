import { BookForm } from "@/components/BookForm";

export default function Page({params}) {

    const handleEditBook = async () => {
        'use server'
        console.log('Updating book...')
    }
    return (
        <div>
            <BookForm action={handleEditBook} params={params}/>
        </div>
    )
}