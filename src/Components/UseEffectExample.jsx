import React, { useEffect, useState } from 'react'

function UseEffectExample() {
    const[count,setCount]=useState(0);
    useEffect(()=>
    {
       console.log("UseEffect Rendered")
    },[count])
    console.log("Component Rerendered")
  return (
    <div>
        <h3>UseEffect Example</h3>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>

        </div>
  )
}

export default UseEffectExample