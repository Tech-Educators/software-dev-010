import { chololateBars } from "@/utils/stores"
import Link from "next/link"

// has to be export const metadata
// always = object with title and description properties.
export const metadata = {
    title: 'Chocolate Bars',
    description: 'This is a page with all the possible chocolate bars in the world! You can click on them to read more...',
    openGraph: {
        title: 'Chocolate Bars | Sams Blog of Chocolate',
        image: ['']
    }
}

export default function Page() {
    console.log(chololateBars)
    return (
        <div>
            {chololateBars.map((bar) => {
                return (
                    <div>
                    <br/>
                    <Link href={`/chocolate-bars/${bar.slug}`}>{bar.name}</Link>
                    </div>
                )
            })}
        </div>
    )
}

// localhost:3000/pageofthetheyclickon

// where i should actually be sending them

// localhost:3000/chocolate-bars/pageofwhatevertheyclickedon