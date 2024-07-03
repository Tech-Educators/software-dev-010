'use client'

import {useState, useEffect} from "react"
export default function Page() {
  const[data, setData] = useState('')

  useEffect(() => {
    async function handleFetchData() {
      const data = await fetch('/api/pets')
      const res = await data.json()

      setData(res)
    }

    handleFetchData()
  }, [])
  console.log(data)

  return (
    <div>
      {data.foo}
    </div>
  )
}