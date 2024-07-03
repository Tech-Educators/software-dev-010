import { cuteFont } from "@/app/layout"
import connect from "@/utils/connect"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
export default function Page() {
    async function handleSubmit(formData) {
        "use server"
        const obj = Object.fromEntries(formData)
        const {title, img_url, description, genre, year_released, score, platform, developer} = obj
        const db = connect()

        db.query(`INSERT INTO games (title, img_url, description, genre, year_released, score, platform, developer) VALUES ($1, $2 $3, $4, $5, $6, $7, $8)`, [title, img_url, description, genre, year_released, score, platform, developer])

        revalidatePath('/games')
        redirect('/games')

    }
    return (
        <div>
            <marquee scrolldelay='100'><h3>Think you have what it takes? Submit a <span className={`${cuteFont.className} text-xl`}>game</span></h3></marquee>
            <form action={handleSubmit} className="flex flex-col w-60 m-auto">
                <input name="title" placeholder="title"></input>
                <input name="img_url" placeholder="img_url"></input>
                <input name="description" placeholder="description"></input>
                <input name="genre" placeholder="genre"></input>
                <input name="year_released" placeholder=" year_released"></input>
                <input name="score" placeholder="score"></input>
                <input name="platform" placeholder=" platform"></input>
                <input name="developer" placeholder=" developer"></input>
                <button type="submit" className="m-8">_submit</button>
            </form>
        </div>
    )
}

/*
    id: 15,
    title: 'NeuroFighter',
    img_url: null,
    description: 'A competitive fighting game with cybernetic enhancements.',
    genre: 'Fighting',
    year_released: 2148,
    score: '8.90',
    platform: 'SpeedNet VR, ConsoleX',
    developer: 'FightTech Studios'
  } */