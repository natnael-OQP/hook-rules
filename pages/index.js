import Head from 'next/head'
import React, { useState,useEffect } from 'react';

export default function Home() {
  const [counter, setCounter] = useState(0)
  const [input,setInput] = useState('')
  const add = () => {
    setCounter(counter+1)
  }
  // 
  const sub = () => {
    setCounter(counter-1)
  }
  // useEffect without dependency  update all ways 
useEffect(() => {
    console.log("i render");
  })
// useEffect with empty dependency update once once
useEffect(() => {
    console.log("i render once "); 
  }, [])
  
// useEffect without dependency update when the dependency is change
useEffect(() => {
  console.log("I render all the way the dependency is changed ");
},[input])




  return (
    <div className="min-h-screen p-4 bg-gray-400 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-around  h-20 max-w-lg mx-auto mt-3 " >
        <input
          value={counter}
          onChange={(e)=>setInput(e.target.value)}
          className="outline-none rounded-md p-2  text-indigo-500 font-medium " type="text" />
        <div className="flex items-center w-25 justify-center mt-3 " >
          <a
            onClick={sub}
            className=" cursor-pointer select-none bg-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-400 " type="button" >sub</a>
          <a
            onClick={add}
            className=" cursor-pointer select-none inline-block mx-2 bg-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-400 " type="button" >add</a>
        </div>
      </div>

    </div>
  )
}

/*

T-shaped developer is   They have a strong skill-set in a specific area, The vertical bar of the T refers to expert experience and understanding of a particular area, while the top of the T refers to an ability to collaborate with experts from other disciplines, gaining even greater understanding and knowledge from this collaboration.
*/