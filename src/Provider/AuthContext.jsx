import React, { createContext, useEffect, useState,  } from 'react';
import { auth } from '../Firebase/Firebace.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthnContext = createContext()
const AuthContext = ({children}) => {
    const [messageErorr,setmessageErorr] = useState('')
    const [user , setuser] = useState(null)
    const [loading,setloading] = useState(true)
    const [showpass,setshowpass]=useState(false)
    const provider = new GoogleAuthProvider()
     
     const registerUser = (email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }
     const updateuser = (profie) =>{
        setloading(true)
       return updateProfile(auth.currentUser,profie)

     }

     const signinUser = (email,password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setuser(currentUser)
            setloading(false)
        })
        return ()=>{
            unsubscribe()
        }

    },[])
    const googlesigninUser = ()=>{
        setloading(true)
      return  signInWithPopup(auth,provider)
    }

    const signoutUser = ()=>{
        setloading(true)
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
        setuser,
        signoutUser,
        googlesigninUser,
        loading,
        setloading,
        showpass,
        setshowpass

    }
   
    return (
        <AuthnContext.Provider value={authinfo}>
            {children}
        </AuthnContext.Provider>
    );
};

export default AuthContext;