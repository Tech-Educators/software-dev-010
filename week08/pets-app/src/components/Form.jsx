
export default async function Form({action, petInfo}) {

    // the vars either get their data from the pet info or all become empty strings 
    // ?? = nullish coalesing operator
    const {pet_name,type,breed, habitat, img_url,bio} = petInfo ?? ''
    return (
        <form action={action} className="flex flex-col text-black">
            <label htmlFor='pet_name'>Enter your pets name:</label>
            <input placeholder="pet name" name="pet_name" id='pet_name' defaultValue={pet_name}></input>

            <label htmlFor='type'>Enter your pets type</label>
            <input placeholder="type..." name="type" id="type" defaultValue={type}></input>

            <label htmlFor='breed'>Enter your pets breed:</label>
            <input placeholder="breed..." name="breed" id='breed' defaultValue={breed}></input>

            <label htmlFor='habitat'>Enter your pets habitat:</label>
            <input placeholder="habitat..." name="habitat" id='habitat' defaultValue={habitat}></input>

            <label htmlFor='img_url'>Enter your pets photograph:</label>
            <input placeholder="URL" name="img_url" id='img_url' type="url" defaultValue={img_url}></input>

            <label htmlFor='bio'>Enter your pets bio:</label>
            <input placeholder="bio" name="bio" id='bio' defaultValue={bio}></input>
            {/* either show submit or update depending on if petinfo is null. because objects (empty ones) are still true, need to check if the array length is = 0 */}
            <button type="submit" className="text-">{Object.entries(petInfo).length != 0 ? 'Submit' : 'Update'}</button>
        </form>
    )
}