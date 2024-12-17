import React from 'react';
import { easeOut, motion } from "motion/react"
import img1 from '../../src/assets/team-working-animation-project_23-2149269901.jpg'
import img2 from '../../src/assets/team-working-animation-project_23-2149269886.jpg'

const Home = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className='flex-1'>
         <motion.img
            src={img1}
            animate={{y:[0,50,0]}}
            transition={{duration:10,repeat:Infinity}}
            className="max-w-sm w-80 h-64 border-l-8 border-b-8 border-blue-700 rounded-t-[40px]  rounded-br-[40px] shadow-2xl" />
            <motion.img
             animate={{x:[150,50,150]}}
             transition={{duration:10,delay:5, repeat:Infinity}}
             className="max-w-sm w-80 h-64 border-l-8 border-b-8 border-blue-700 rounded-t-[40px]  rounded-br-[40px] shadow-2xl" 
            src={img2} alt="" srcset="" />
         </div>
          <div className='flex-1'>
            <motion.h1 animate={{x:[50,150,100]}} transition={{duration: 2,delay:1, ease: easeOut, repeat: Infinity}} className="text-5xl font-bold">New <motion.span animate={{color:['#fff933',' #ff6433','#8aff33']}} transition={{duration:1.5,repeat:Infinity}}>jobs</motion.span> for you!</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Home;