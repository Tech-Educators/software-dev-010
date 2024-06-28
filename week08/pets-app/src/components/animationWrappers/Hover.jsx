'use client'
import {motion} from "framer-motion"

export function HoverEffect({children}) {
    return (
        <motion.div
            whileHover={{
                scale: [1.05, 1.04, 1.05],
                transition: "spring"
            }}
        >
            {children}
        </motion.div>
    )
}