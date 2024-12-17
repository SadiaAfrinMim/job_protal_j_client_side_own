import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import Authuse from '../hook/Authuse';
import { useNavigate } from 'react-router-dom';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,

})

const UseAxiosSecure = () => {
    const {handleSignOut}  = Authuse()
    const navigate = useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response;
        },error=>{
            console.log('error caught in interceptor',error);
            if(error.status === 401 || error.status === 403){
                console.log('need to logout the user')
               handleSignOut()
               .then(()=>{
                console.log('logout user')
                navigate('/login')
               })
               .catch(error=>{
                console.log(error)
               })
            }
            return Promise.reject(error)
        })
    },[])
    return axiosInstance;
};

export default UseAxiosSecure;