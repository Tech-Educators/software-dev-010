import { connect } from "@/utils/connect"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

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
            <h1>Add a new pet:</h1>
            <form action={handleAddPet} className="flex flex-col text-black">
                <label htmlFor='pet_name'>Enter your pets name:</label>
                <input placeholder="pet name" name="pet_name" id='pet_name'></input>

                <label htmlFor='type'>Enter your pets type</label>
                <input placeholder="type..." name="type" id="type"></input>

                <label htmlFor='breed'>Enter your pets breed:</label>
                <input placeholder="breed..." name="breed" id='breed'></input>

                <label htmlFor='habitat'>Enter your pets habitat:</label>
                <input placeholder="habitat..." name="habitat" id='habitat'></input>

                <label htmlFor='img_url'>Enter your pets photograph:</label>
                <input placeholder="URL" name="img_url" id='img_url' type="url"></input>

                <label htmlFor='bio'>Enter your pets bio:</label>
                <input placeholder="bio" name="bio" id='bio'></input>

                <button type="submit" className="text-white">Submit</button>
            </form>
        </div>
    )
}

/*
| id | pet_name | type | breed | habitat | img_url| bio                                                        
*/