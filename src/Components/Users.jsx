import React, { useEffect, useState } from 'react'
import Userss from './Userss'

function Users() {
    const[user,setUser]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>
    {
          setLoading(true);
      fetch("https://api.github.com/users").then((res)=>res.json()).then((data)=>setUser(data)).then(()=>setLoading(false)).catch((err)=>console.log(err))
    },[]);
  return (
    <div>
        {loading && <div>Loading....</div>}
        <div style={{display:"flex",flexDirection:"row",gap:4,flexWrap:"wrap"}}>
        {user.map((user)=><Userss key={user.id}  login={user.login} avatar_url={user.avatar_url} />  )}
        </div>
       
    </div>
  )
}

export default Users