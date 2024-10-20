import {  createContext, useEffect, useState } from "react";
import { auth } from "../utils/utils";
import { onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext()


function AuthContextProvider({children}) {
    
    const [user, setUser] = useState({
        isLogin : false, 
        userInfo : {}
    })
    const [loading , setLoading] = useState(true)

    function onAuthChanged(user) {
    
        if (user) {
            setUser({isLogin: true, userInfo : user})
        }else{
            setUser({isLogin : false , userInfo : {}})
        }
    

        setLoading(false)
      }
    
      useEffect(() => {
        const subscriber = onAuthStateChanged(auth, onAuthChanged);
        return subscriber; // unsubscribe on unmount
      }, []);



    return(
        <AuthContext.Provider value={{user, setUser}}>
            {loading ? ( <div className="flex space-x-3 justify-center items-center bg-white mt-96  dark:invert p-1">
 
 <div className="h-12 w-12 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
 <div className="h-12 w-12 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
  <div className="h-12 w-12 bg-black rounded-full animate-bounce" />
</div>):(children)}
   
</AuthContext.Provider>
    )

}


export default AuthContextProvider


 