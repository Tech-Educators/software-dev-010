export default function AddPet() {
    return (
        <div>
            <h1>Add a new pet:</h1>

            <form className="flex flex-col">
                <label htmlFor='pet_name'>Enter your pets name:</label>
                <input placeholder="pet name" name="pet_name" id='pet_name'></input>

                <label htmlFor='type'>Enter your pets type</label>
                <input placeholder="type..." name="type" id="type"></input>

                <label htmlFor='breed'>Enter your pets breed:</label>
                <input placeholder="breed..." name="breed" id='breed'></input>

                <label htmlFor='habitat'>Enter your pets habitat:</label>
                <input placeholder="habitat..." name="habitat" id='habitat'></input>

                <label htmlFor='img_url'>Enter your pets photograph:</label>
                <input placeholder="URL" name="img_url" id='img_url'></input>

                <label htmlFor='bio'>Enter your pets bio:</label>
                <input placeholder="bio" name="bio" id='bio'></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

/*
| id | pet_name | type | breed | habitat | img_url| bio                                                        
*/