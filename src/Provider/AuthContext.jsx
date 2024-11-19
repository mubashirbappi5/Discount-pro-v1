import React, { createContext, useEffect, useState,  } from 'react';
import { auth } from '../Firebase/Firebace.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthnContext = createContext()
const AuthContext = ({children}) => {
    const [messageErorr,setmessageErorr] = useState('')
    const [user , setuser] = useState(null)
     
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

    }
   
    return (
        <AuthnContext.Provider value={authinfo}>
            {children}
        </AuthnContext.Provider>
    );
};

export default AuthContext;