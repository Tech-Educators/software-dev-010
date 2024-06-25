import Link from "next/link"
export default function NavBar() {
    return (
        <header>
            <ol>
                <Link href='/'>Home</Link>
                <br></br>
                <Link href='/chocolate-bars'>Chocolate Bars</Link>
            </ol>
        </header>
    )
}