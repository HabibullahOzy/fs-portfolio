import React from 'react';

const Navebar = () => {
    return (
        <div>
            <div className="navbar bg-white w-1/2 mx-auto rounded-s-full rounded-r-full shadow-lg relative top-0">
        <div className="navbar-start" style={{width:"110px"}}>
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
              <li>
                <a>about</a>

              </li>
              <li><a>Skills</a></li>
              <li><a>Publications</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className='btn hover:btn-info bg-white border-none'>Home</a></li>
            <li>
              <a href='#Education' className='btn hover:btn-info bg-white border-none'>about</a>
            </li>
            <li><a href='#Skill' className='btn hover:btn-info bg-white border-none'>Skills</a></li>
            <li><a href='#Publication' className='btn hover:btn-info bg-white border-none'>Publications</a></li>
            <li><a className='btn hover:btn-info bg-white border-none'>Contact</a></li>
          </ul>
        </div>

      </div>
        </div>
    );
};

export default Navebar;