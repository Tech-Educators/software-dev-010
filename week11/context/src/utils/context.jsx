'use client'
import {useState, useContext, createContext} from "react"

// how to setup useContext
// 1. create a context

export const visitorCount = createContext(0)

// 2. set up a provider 
// 
export function VisitorProvider({children}) {
    const [vis, setVis] = useState(0)
    return (
        <visitorCount.Provider value={{vis, setVis}}>
            {children}
        </visitorCount.Provider>
    )
}

// 3. I'm going to go to my layout and wrap my project in the provider that I've made


// 4. import useContext and the context you made into the component you need it in. I'll do in component 4. 



// 1

export const UserInfo = createContext('')

export function UserInfoProvider({children}) {
    return (
        <UserInfo.Provider value="Sam">
            {children}
        </UserInfo.Provider>
    )
}