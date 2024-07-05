import Link from "next/link"
import { SignInButton, UserButton, SignedIn, SignedOut, auth} from "@clerk/nextjs";


export default function Nav() {
    return (
        <div>
            <ol className={`flex justify-between flex-row p-3`}>
                <div className="flex">
                    <li className="m-4"><Link href='/'>home</Link></li>
                    <li className="m-4"><Link href='/posts'>timeline</Link></li>
                    <li className="m-4"><Link href='/posts/add-post'> add post</Link></li>
                    <li className="m-4"><Link href='/add-category'> add/view categories</Link></li>
                </div>
                <li className="m-4 self-end">
                    {
                    <>
                        <SignedIn>
                            <UserButton/>
                        </SignedIn>
                        <SignedOut>
                            <SignInButton afterSignInUrl="/" afterSignUpUrl="/users/sign-up">
                                Sign In
                            </SignInButton>
                        </SignedOut>
                    </>
                    }
                </li>
            </ol>
        </div>
    )
}