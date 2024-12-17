import React, { useContext } from 'react';
import AuthContex from '../Authprovider/AuthContex';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loading} = useContext(AuthContex);
    const location = useLocation()
    console.log(location)
    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login' ></Navigate>
    
};

export default Privateroute;