import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{display:"flex",gap:5,alignContent:"centre",justifyContent:"centre"}}>
      <Link to="/products">
        Products
      </Link>
      <Link to="/about">
        About
      </Link>
      <Link to="/contects">
        Contects
      </Link>
      <Link to="/">
        Home
      </Link>
      <Link to="/user/any">
        Dynamic
      </Link>
    </div>
  )
}

export default Header;