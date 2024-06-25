import { chololateBars } from "@/utils/stores"
import Link from "next/link"
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