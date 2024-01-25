import React, { useReducer, useState } from 'react';
const reducerfn=(state,action)=>{
  switch(action.type)
  {
    case "FORDWARD":
      return {steps: state.steps+1};
    case "BACKWARD":
      return {steps: state.steps-1};
    case "CUSTOM":
      return {steps: state.steps+ action.payload}
    default:
      return {...state };
  }

}
const initialstate={
  steps:0
}
function UseReducer() {
  const [inputvalue,setInput]=useState("");
  const[state,dispatch]=useReducer(reducerfn,initialstate);
  const handlebackward=()=>
  { 
    const action={type:"BACKWARD"};
    dispatch(action)
  }
  const handlefordward=()=>
  {
    const action={type:"FORDWARD"};
    dispatch(action)

  }
  const handlecustom=(setsteps)=>
    {
      const action={type:"CUSTOM",payload:Number(setsteps)};
      dispatch(action);

    }
  return (
    <div>
      <h1>useReducer</h1>
      <p>Player has Moved {state.steps} </p>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10}}>
        <button onClick={handlefordward}>Move Fordward</button>
        <button onClick={handlebackward}>Move Backward</button>
      </div>
      <div>
        <input type="text" value={inputvalue} onChange={(e)=> setInput(e.target.value)} />
        <button onClick={()=>handlecustom(Number(inputvalue))}>custom increment</button>
      </div>
    </div>
  )
}

export default UseReducer;