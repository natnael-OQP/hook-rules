import Head from 'next/head'
import React, { useState,useRef } from 'react';
import useRandomJoke from '../customHook/useRandomjoke';

export default function Home() {
  // custom Hook
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const joke = useRandomJoke(firstName, lastName);

  const GenerateJock = (e) => {
    e.preventDefault()
    setFirstName(firstNameRef.current.value)
    setLastName(lastNameRef.current.value)
  }

  return (
    <div className="min-h-screen p-4 bg-green-300 ">
      <Head>
        <title>Hooks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-around items-center  h-50 max-w-lg mx-auto mt-3 " >
      <h1 className="text-2xl px-8 font-bold pb-4 text-red-500 " >Generate jokes </h1>
        <form>
          <input
            ref={firstNameRef}
            className="m-2 outline-none p-2 text-black rounded-md shadow-sm " placeholder="first name" type="text" />
          <input
            ref={lastNameRef}
            className="m-2 outline-none p-2 text-black rounded-md shadow-sm " placeholder="last name" type="text" />
        </form>
        <a
          onClick={GenerateJock}
          type="submit"
          className=" cursor-pointer select-none  bg-blue-500 px-8 py-2 text-white rounded-md shadow-md hover:bg-blue-400 " type="button"
        >jokes</a>
        <p className="text-red-400 text-lg font-semibold pt-4 " >{joke}</p>
        </div>
      </div>
  )
}

// -----------------------------------------------------------------------------------------------
//--------------------- learn useState and useEffect hook and the rules of hook and cleanup hooks
// -----------------------------------------------------------------------------------------------

// import Head from 'next/head'
// import React, { useState,useEffect } from 'react';

// export default function Home() {
//   const [counter, setCounter] = useState(0)
//   const [input, setInput] = useState('')
//   const [windowWidth, setWindowWidth] = useState();
//   const add = () => {
//     setCounter(counter+1)
//   }
//   const handelWidth = () => {
//     setWindowWidth(window.innerWidth);
//   }
//   // 
//   const sub = () => {
//     setCounter(counter-1)
//   }
//   // useEffect without dependency  update all ways and  cleanup the function
//   useEffect(() => {
//     console.log("I render ");
//   })
// useEffect(() => {
//   window.addEventListener('resize', handelWidth)
//   // cleanup the function
//   return () => {
//     window.removeEventListener('resize', handelWidth);
//   }
// })
  
// useEffect(() => {
//   window.addEventListener('resize', handelWidth)
//   // simple way of  cleanup the function
// },[])
  
  

// // useEffect with empty dependency update once once
// useEffect(() => {
//     console.log("i render once "); 
//   }, [])
  
// // useEffect without dependency update when the dependency is change
// useEffect(() => {
//   console.log("I render all the way the dependency is changed ");
// },[input])




//   return (
//     <div className="min-h-screen p-4 bg-gray-400 ">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className="flex flex-col justify-around  h-20 max-w-lg mx-auto mt-3 " >
//         <input
//           value={counter}
//           onChange={(e)=>setInput(e.target.value)}
//           className="outline-none rounded-md p-2  text-indigo-500 font-medium " type="text" />
//         <div className="flex items-center w-25 justify-center mt-3 " >
//           <a
//             onClick={sub}
//             className=" cursor-pointer select-none bg-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-400 " type="button" >sub</a>
//           <a
//             onClick={add}
//             className=" cursor-pointer select-none inline-block mx-2 bg-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-400 " type="button" >add</a>
//         </div>
//         <h1 className="text-indigo-600 text-xl font-bold pt-2 " >window width : <span className="text-red-500" >{windowWidth}</span> </h1>
//       </div>

//     </div>
//   )
// }

