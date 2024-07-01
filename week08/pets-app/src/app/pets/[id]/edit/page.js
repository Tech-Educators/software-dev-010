import Form from "@/components/Form"
import { connect } from "@/utils/connect"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function Page({params}) {
    const db = connect()
    const petInfo =  (await db.query(`SELECT * FROM pets WHERE id = $1`, [params.id])).rows[0]

    async function handleEditPet(formData) {
        "use server"
        // TODO: Look into pg pool vs client? Better to open a long lasting connection or not. idk.
        const db = connect()
        const data = Object.fromEntries(formData)
        const {pet_name, type, breed, habitat, img_url, bio} = data

        await db.query(`UPDATE pets SET
            pet_name = $1,
            type = $2,
            breed = $3,
            habitat = $4,
            img_url = $5,
            bio = $6
            WHERE
            id = $7
            `, [
            pet_name,
            type,
            breed,
            habitat,
            img_url,
            bio,
            params.id
        ])

        revalidatePath('/pets')
        redirect('/pets')
    }
    return (
        <div>
            <Form action={handleEditPet} petInfo={petInfo}/>
        </div>
    )
}