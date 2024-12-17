import React from 'react';
import Home from './Home';
import Jobscard from '../component/Jobscard';
import Jobdeals from '../component/Jobdeals';
import Jobrelated from '../component/Jobrelated';

const Bannerpage = () => {
    return (
        <div>
            <Home></Home>
            <Jobscard></Jobscard>
            <Jobdeals></Jobdeals>
            <Jobrelated></Jobrelated>
            
        </div>
    );
};

export default Bannerpage;