import { connect } from "@/utils/connect"
import Image from "next/image"
export default async function PetPage({params}) {
    const db = connect()
    const petInfo = (await db.query(`SELECT * FROM pets WHERE id = $1`, [params.id])).rows[0]
    console.log(petInfo)
    return (
        <div>
            <h2>{petInfo.pet_name}</h2>
            <p>{petInfo.breed}</p>
            <Image src={petInfo.img_url} width={500} height={600}/>
            <p>{petInfo.habitat}</p>
            <br/>
            <p>{petInfo.bio}</p>
        </div>
    )
}