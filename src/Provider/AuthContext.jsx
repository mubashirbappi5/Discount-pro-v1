import React, { createContext, useEffect, useState,  } from 'react';
import { auth } from '../Firebase/Firebace.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthnContext = createContext()
const AuthContext = ({children}) => {
    const [messageErorr,setmessageErorr] = useState('')
    const [user , setuser] = useState(null)
    const provider = new GoogleAuthProvider()
     
     const registerUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
     }
     const updateuser = (profie) =>{
       return updateProfile(auth.currentUser,profie)

     }

     const signinUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
     }

     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setuser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }

    },[])
    const googlesigninUser = ()=>{
      return  signInWithPopup(auth,provider)
    }

    const signoutUser = ()=>{
        signOut(auth)
        .then(()=>{
            console.log("log out done")
        })
        .catch(error=> console.log(error))
    }
    const name = 'bappi'
    const authinfo = {
        name,
        registerUser,
        updateuser,
        messageErorr,
        setmessageErorr,
        signinUser,
        user,
        signoutUser,
        googlesigninUser,

    }
   
    return (
        <AuthnContext.Provider value={authinfo}>
            {children}
        </AuthnContext.Provider>
    );
};

export default AuthContext;