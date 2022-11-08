import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../lib/firebase'
import { getAuth, createUserWithEmailAndPassword , signOut ,signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";


const Usercontext = createContext()
const Authcontext = ({children}) => {
  const [user,setUser] = useState(null) 
  useEffect(()=>{
    const subcriber = onAuthStateChanged(auth,user =>{setUser(user)})
    return () => subcriber()
  },[]) 
  const register = (email,password) =>{
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }
    
    const login =(email,password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }

    const logout = () =>{
        signOut(auth).then(() => {
            setUser(null)
          }).catch((error) => {
            // An error happened.
          });
    }


  return (
    <Usercontext.Provider value={{login,logout,register,user}}>{children}</Usercontext.Provider>
  )

}

export default Authcontext
const useAuth = () => { useContext(Usercontext)}
export {useAuth}