import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
    return (
        <div className="navbar">
  <div className="navbar-start">
  <div className='hidden md:block text-2xl font-bold pl-28'>
  {user && user.email ? <h2>{user.email}</h2> : <h2>Guest</h2>}
</div>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Career</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Career</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user && user?.email ? (<button onClick={logOut} className='btn'>Sign Out</button>) : (<NavLink to={"/login"} className="btn font-extrabold">Login</NavLink>)
    }
  </div>
</div>
    );
};

export default Navbar;