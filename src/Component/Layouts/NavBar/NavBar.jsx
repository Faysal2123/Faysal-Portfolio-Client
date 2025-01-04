import React from "react";
import logo from '../../../assets/logo.png'
const NavBar = () => {
  const links = (
    <>
      <li>
        <a>HOME</a>
      </li>
      <li>
        <a>ABOUT</a>
      </li>
      <li>
        <a>SKILLS</a>
      </li>
      <li>
        <a>PORTFOLIO</a>
      </li>
      <li>
        <a>CONTACT</a>
      </li>
    </>
  );

  return (
    <div className="lg:w-11/12 mx-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                {links}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="lg:w-20 lg:h-20 h-14 w-14" src={logo} alt="" />
          <a className=" text-4xl font-bold">FAYSAL</a>

          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-semibold">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-error text-white">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
