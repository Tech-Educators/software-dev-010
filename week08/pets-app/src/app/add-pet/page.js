import { connect } from "@/utils/connect"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import Form from "@/components/Form"

export default function AddPet() {

    async function handleAddPet(formData) {
        "use server"
        const data = Object.fromEntries(formData)
        const {pet_name, type, breed, habitat, img_url, bio} = data
        // const pet_name = formData.get('pet_name')
        // const type = formData.get('type')
        // const breed = formData.get('breed')
        // const habitat = formData.get('habitat')
        // const img_url = formData.get('img_url')
        // const bio = formData.get('bio')

        

        const db = connect()
        // you write the insert statement
        db.query(`INSERT INTO 
                  pets (pet_name, type, breed, habitat, img_url, bio) 
                  VALUES 
                  ($1, $2, $3, $4, $5, $6)`, 
                  [
                    pet_name, type, breed, habitat, img_url, bio
                  ]
                )

       // make sure the database and the data on the home route are the same
       revalidatePath('/')
       // redirect the user back to the home route.
       redirect('/')
    }

    return (
        <div className="max-w-56 relative m-0">
            <Form action={handleAddPet}/>
        </div>
    )
}

/*
| id | pet_name | type | breed | habitat | img_url| bio                                                        
*/