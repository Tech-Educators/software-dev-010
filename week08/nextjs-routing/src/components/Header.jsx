import Link from "next/link"

export default function Header() {
    return (
        <header>
            <ol>
                <li><Link href='/about'>About page</Link></li>
                <li><Link href='/meet-the-team'>Team page</Link></li>
                <li><a href='/moths'>moth information</a></li>
                <li><Link href='/users'>Your profile</Link></li>
            </ol>
        </header>
    )
}