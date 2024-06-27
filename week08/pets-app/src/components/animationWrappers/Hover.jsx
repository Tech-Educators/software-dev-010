'use client'
import {motion} from "framer-motion"

export function HoverEffect({children}) {
    return (
        <motion.div
            whileHover={{scale: 1.1}}
        >
            {children}
        </motion.div>
    )
}