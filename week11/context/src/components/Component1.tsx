'use client'
import {useState} from "react"
import {Component2} from "@/components/Component2"

export function Component1() {
    return (
        <div className="border h-screen">
            <h1>component 1</h1>
            {/* <p>{`Hello, ${user}`}</p> */}
            <Component2/>
        </div>
    )
}