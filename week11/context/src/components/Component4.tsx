import { useContext } from "react"
import {visitorCount} from "@/utils/context"

export function Component4() {
    // takes the context you're trying to consume as an argument
    const {vis, setVis} = useContext(visitorCount)

    return (
        <div className="border w-1/2 h-1/2 m-2">
            <h1>component 4</h1>
            <p>{vis}</p>
            <button onClick={() => {
                setVis(vis + 1)
            }}>+1</button>
            {/* <p>{user}</p> */}
        </div>
    )
}