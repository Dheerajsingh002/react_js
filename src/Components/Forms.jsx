import React, { useState } from 'react';
import './Form.css';
const quantities = ["0-100","100-200","200-300","300-400","400-500"];

function Forms() {
    const[inputs,setInputs] = useState({title:"",Discription:"",Price:"",quantity:""});
    function HandleInputs(e)
    {
        setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    function HandlerSubmit(e)
    {
        e.preventDefault();
        console.log(inputs);
    }
  return (
    <div>
        <section>
            <form onSubmit={HandlerSubmit}>
                <div className="inputs">
                    <input type="text" onChange={HandleInputs} value={inputs.title} name="title" placeholder='title' />
                    <input type="Discription" onChange={HandleInputs} value={inputs.Discription} name="Discription" placeholder='Discription' />
                    <input type="Price" onChange={HandleInputs} value={inputs.Price} name="Price" placeholder='Price' />
                    <select value={inputs.quantity} onChange={HandleInputs} name="quantity" id="">
                        {
                            quantities.map((item)=>
                            {
                                return <option key={item} value={quantities[item]}>{item}</option>
                            })
                        }
                    </select>
                    <button>Submit</button>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Forms;