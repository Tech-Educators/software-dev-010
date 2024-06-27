'use client'
// the 'use client' directive
// this tells nextjs that this file needs to be sent to the client for it to run along with the HTML
import {motion} from "framer-motion"
import {useState} from "react"

export function LikeButton() {
    const [like, setLikes] = useState(0)

    return (
        <div>
            <motion.button
                // whileHover={{scale: 2}} 
                whileHover={{rotate: 360, scale: 2}}
                transition={{duration: 10}}
                whileTap={{backgroundColor: "#F02345"}}
                onClick={() => {setLikes(like + 1)}}>
                    {`<3 ${like}`}
            </motion.button>
        </div>
    )
}