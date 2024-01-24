import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({text}) {
  return (
    <div>
        <ul>
            <Link to="/about">{text}</Link>
            <br></br>
            <Link to="/">Home</Link>
        </ul>
    </div>
  )
}

export default Navbar