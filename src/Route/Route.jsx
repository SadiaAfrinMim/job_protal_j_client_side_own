import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Mainlayout/Mainlayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home';
import Bannerpage from '../Pages/Bannerpage';
import Jobdetails from '../Pages/Jobdetails';
import Privateroute from './Privateroute';
import Jobapply from '../Pages/Jobapply';
import Myapplications from '../Pages/Myapplications';
import AddJob from '../Pages/Addjob';
import Postedjob from '../Pages/Postedjob';
import View from '../Pages/view';
import ViewApplication from '../Pages/ViewApplication';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Bannerpage></Bannerpage>
      },
      {
        path: '/job/:id',
        element: <Privateroute><Jobdetails></Jobdetails></Privateroute>,
        loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)
      },
      {
        path: '/myapplication',
        element: <Myapplications></Myapplications>,

      },
      {
        path: '/addjob',
        element: <AddJob></AddJob>,
      },
      {
        path: '/myPostedJob',
        element: <Privateroute><Postedjob></Postedjob></Privateroute>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: '/viewApplications/:job_id',
        element: <Privateroute><ViewApplication /></Privateroute>,
        loader: ({ params }) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`),
    },
    
      {
        path: '/jobapply/:id',
        element: <Privateroute><Jobapply></Jobapply></Privateroute>
      },
      {
        path: "register",
        element: <Register></Register>
      }]
  },
]);


export default router