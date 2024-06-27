import { connect } from "@/utils/connect"
import Image from "next/image"
import { LikeButton } from "@/components/LikeButton"
export default async function PetPage({params}) {
    const db = connect()

    const petInfo = (await db.query(`SELECT * FROM pets WHERE id = $1`, [params.id])).rows[0]
    console.log(petInfo)


    return (
        <div className="flex flex-col flex-wrap justify-center items-center max-w-screen-md m-auto">
            <h2>{petInfo.pet_name}</h2>
            <p className="text-xs">{petInfo.breed}</p>
            <LikeButton />
            <Image src={petInfo.img_url} width={300} height={350}/>
            <p className="text-xs">{petInfo.habitat}</p>
            <br/>
            <p>{petInfo.bio}</p>
        </div>
    )
}