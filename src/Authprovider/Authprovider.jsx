import React, { useEffect, useState } from 'react';
import AuthContex from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

import { auth } from '../firebase/firebase_init_';
import axios from 'axios';

const Authprovider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const handleLogin =(email,password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSignIn =() =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe  = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser?.email){
                const user = {email: currentUser.email}
                axios.post('http://localhost:5000/jwt',user,{withCredentials: true})
                .then(res=>console.log(res.data))
            }
            setLoading(false);
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const handleSignOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const AuthInfo = {
        setLoading,setUser,createUser,handleSignIn,handleLogin,handleSignOut,user

    }
    return (
        <AuthContex.Provider value={AuthInfo}>
            {children}

        </AuthContex.Provider>
    );
};

export default Authprovider;