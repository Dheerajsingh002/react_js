import { createContext, useContext, useState } from "react";

const LoginContext=createContext();
export const useAuth=()=>useContext(LoginContext);

const LoginProviders=({children })=>
{
 const[isLoggedIn,setLoggedIn]=useState(false);
 const[userId,setUserId]=useState("nihal");
 const login=(userId)=>
 {
     setLoggedIn(true);
     setUserId(userId);
;
 }
 const logout=()=>
 {
    setLoggedIn(false);
    setUserId(" ");

 }
 const value={isLoggedIn,userId,login,logout};
 return(
    <LoginContext.Provider value={value}>
          {children}
   </LoginContext.Provider>
 );
 

}
export default  LoginProviders;