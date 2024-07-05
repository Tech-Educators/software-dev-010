import Link from "next/link"
import { SignInButton, UserButton, SignedIn, SignedOut} from "@clerk/nextjs";
import {auth} from '@clerk/nextjs/server'


export default function Nav() {
    const {userId} = auth()
    return (
        <div>
            <ol className={`flex justify-between flex-row p-3`}>
                <div className="flex">
                    <li className="m-4"><Link href='/'>home</Link></li>
                    <li className="m-4"><Link href='/posts'>timeline</Link></li>
                    <li className="m-4"><Link href='/posts/add-new-post'> add post</Link></li>
                    <li className="m-4"><Link href='/add-category'> add/view categories</Link></li>
                </div>
                <li className="m-4 self-end">
                    {
                    <>
                        <SignedIn>
                            <UserButton/>
                            <Link href={`/users/user-profile/${userId}`}>Your profile</Link>
                        </SignedIn>
                        <SignedOut>
                            <SignInButton mode="modal">
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