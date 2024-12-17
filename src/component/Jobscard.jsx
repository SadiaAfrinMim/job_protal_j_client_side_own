import React, { useEffect, useState } from 'react';
import Singlecard from './Singlecard';

const Jobscard = () => {
    const [jobs,setJobs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
           <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
           {
                jobs.map(job=><Singlecard key={job._id} job={job}></Singlecard>)
            }
            
           </div>
        </div>
    );
};

export default Jobscard;