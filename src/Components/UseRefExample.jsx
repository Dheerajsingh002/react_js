import React, { useEffect, useRef } from 'react'

function UseRefExample() {

    const element=useRef();
    useEffect(()=>
    {
        element.current=element.current+10;
        console.log(element.current);
    },[]);
  return (
    <div>
        <h1>UseReference Example</h1>
        <h2 ref={element}>Hi</h2>
    </div>
  )
}

export default UseRefExample