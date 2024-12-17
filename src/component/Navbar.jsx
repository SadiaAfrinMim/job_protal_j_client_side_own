import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContex from '../Authprovider/AuthContex';
import Img from '../../src/assets/icons8-news-64.png';

const Navbar = () => {
  const { handleSignOut, user } = useContext(AuthContex);

  const link = (
    <>
      <li>
        <NavLink to="/" activeClassName="text-blue-600">Home</NavLink>
      </li>
      <li>
        <NavLink to="/myapplication" activeClassName="text-blue-600">My Application</NavLink>
      </li>
      <li><NavLink to='/addjob'>Add job</NavLink></li>
      <li><NavLink to='/myPostedJob'>Posted Job</NavLink></li>
     
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white text-black rounded-box mt-3 w-52 p-2 space-y-2 shadow-lg">
            {link}
          </ul>
        </div>

        <div className="font-bold text-xl flex items-center space-x-2">
          <img src={Img} alt="Logo" className="w-10 h-10 rounded-full" />
          <p className="text-xl">News Portal</p>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mx-4 space-x-6">
          {link}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <button className="btn bg-red-500 hover:bg-red-600 text-white" onClick={handleSignOut}>Sign Out</button>
        ) : (
          <>
            <Link to="/login">
              <button className="btn bg-blue-600 hover:bg-blue-700 text-white mx-2">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn bg-green-500 hover:bg-green-600 text-white mx-2">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
