import SlowComponent from "@/components/slow"
import {Suspense} from "react"

export default function Page() {
    return (
        <div>
            <p>This is the fast route! I can still see this immediately</p>
            <Suspense fallback={<p>This is shown while the other component is loading</p>}>
                <SlowComponent />
            </Suspense>
        </div>
    )
}