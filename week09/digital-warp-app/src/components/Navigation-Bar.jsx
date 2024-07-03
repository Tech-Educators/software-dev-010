import Link from "next/link"
import { Logo } from "./icons/Logo"
export default function NavigationBar() {
    return (
        <ol className="flex sticky *:m-4 items-start h-1/6">
            <li><Link href='/'><Logo/></Link></li>
            <li><Link href='/games'>latest games</Link></li>
            <li><Link href='/games/submit-game'>submit a game</Link></li>
            <li><Link href='/forum'>forum</Link></li>
        </ol>
    )
}