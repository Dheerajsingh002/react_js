import React from 'react';
import './User.css';

function Userss({login,avatar_url}) {
  return (
    <div className='container'>
        <img src={avatar_url} alt={login} />
        <h1>{login}</h1>
    </div>
  )
}

export default Userss;