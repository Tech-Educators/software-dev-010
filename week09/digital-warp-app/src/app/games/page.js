import connect from "@/utils/connect"
import Link from "next/link"
import { cuteFont } from "../layout"

// yes really, i dont want you to cache
export const dynamic = 'force-dynamic'

export default async function Page() {
    const db = connect() 
    const data = (await db.query(`SELECT * FROM games`)).rows

    console.log(data)
    return (
        <div className="flex justify-center">
            <h1 className={`${cuteFont.className} text-4xl`}>Games: </h1>
            <div className="flex flex-col mx-6">
            {data.map(game => (
                <Link href={`/games/${game.id}`}>{game.title}</Link>
            ))}
            </div>
            <marquee className='absolute bottom-4'>
            {data.map(game => (
                <Link href={`/games/${game.id}`}>{game.title}</Link>
            ))}
            </marquee>
        </div>
    )
}