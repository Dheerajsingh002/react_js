import React, { useContext } from 'react'
import LoginProviders, { LoginContext, useAuth } from './Components/UseContext'

function UseContexts() {
    const {userId}=useAuth();
    
  return (
    <div>{userId}</div>
  )
}

export default UseContexts