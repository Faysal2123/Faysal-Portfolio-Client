import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll
import logo from "../../../assets/logo.png";
import logo1 from '../../../assets/fav3.png'

const NavBar = () => {
  const links = (
    <>
      <li className="hover:text-gray-300">
        <ScrollLink to="home" spy={true} smooth={true} duration={500}>
          HOME
        </ScrollLink>
      </li>
      <li className="hover:text-gray-300">
        <ScrollLink to="about" spy={true} smooth={true} duration={500}>
          ABOUT
        </ScrollLink>
      </li>
      <li className="hover:text-gray-300">
        <ScrollLink to="skills" spy={true} smooth={true} duration={500}>
          SKILLS
        </ScrollLink>
      </li>
      <li className="hover:text-gray-300">
        <ScrollLink to="portfolio" spy={true} smooth={true} duration={500}>
          PORTFOLIO
        </ScrollLink>
      </li>
      <li className="hover:text-gray-800">
        <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
          CONTACT
        </ScrollLink>
      </li>
    </>
  );

  return (
    <div className=" text-white w-11/12 mx-auto">
      <div className="bg-zinc-800 lg:w-11/12 mx-auto">
        <div className="navbar fixed z-10 bg-opacity-50 left-0 right-0  bg-zinc-800">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 "
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black font-semibold"
              >
                {links}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <img className="lg:w-11 lg:h-11 h-10 w-10" src={logo1} alt="" />
              <a className="md:text-4xl text-3xl font-bold">FAYSAL</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 text-base font-semibold">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
              <a className="btn bg-error border-error lg:font-bold text-white">Contact Me</a>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
