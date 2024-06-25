'use client'
import {useState, useEffect} from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function NavBar() {
    const [currentHeader, setCurrentHeader] = useState('None selected')
    const pathname = usePathname()

    useEffect(() => {
        // ???
        const header = pathname.split('/').filter(Boolean).join(' ').toUpperCase().split('-').join(' ')
        console.log(header)
        setCurrentHeader(header)
    }, [pathname]) 
    return (
        <header>
            <li><Link href='/tailwind-demo'>Tail wind</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/seaweed-shakers'></Link></li>
            <li>Fum</li>
            <h2>Current Page: {currentHeader}</h2>
        </header>
    )
}