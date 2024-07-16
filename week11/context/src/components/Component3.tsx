'use client'
import {Component4} from "@/components/Component4"
import { UserInfo } from "@/utils/context"
import { useContext } from "react"
export function Component3() {
    const userName = useContext(UserInfo)
    return (
        <div className="border w-1/2 h-1/2 m-2">
            <h1>component 3</h1>
            {userName}
            <Component4/>
        </div>
    )
}