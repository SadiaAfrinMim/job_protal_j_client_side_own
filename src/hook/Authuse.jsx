import React, { useContext } from 'react';
import AuthContex from '../Authprovider/AuthContex';

const Authuse = () => {
    const contex = useContext(AuthContex)
    return contex;
};

export default Authuse;