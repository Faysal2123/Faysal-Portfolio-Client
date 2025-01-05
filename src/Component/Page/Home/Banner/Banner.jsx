import React from "react";
import bannerImg from '../../../../assets/faysal.png'
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FacebookOriginal, LinkedinOriginal } from "devicons-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
  <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-black pt-6">
      <div className="flex justify-between lg:flex-row flex-col-reverse  w-11/12 mx-auto ">
      <div className="space-y-2 flex flex-col justify-center text-slate-100  text-center lg:text-start mt-6">
        <p className="lg:text-2xl text-xl font-semibold">Hello,I'm </p>
        <h1 className="lg:text-5xl text-4xl font-bold">Mohammad Faysal</h1>
        <h4 className="lg:text-2xl text-xl font-semibold lg:pt-2 pt-1">Mern Stack Web Developer</h4>
        <p className="lg:text-lg  lg:w-11/12 lg:pt-6 pt-3">
          Hi, I'm Mohammad Faysal, a passionate MERN stack web developer. I
          specialize in creating dynamic, responsive, and user-friendly web
          applications. With expertise in React, Node.js, Express, and MongoDB,
          I craft seamless digital experiences.I thrive on tackling challenges with clean, efficient, and scalable code. Let's collaborate to turn ideas
          into reality with modern web technologies!
        </p>
        <div className="flex gap-6 pt-4 justify-center pb-3 lg:justify-start">
          <Link className="  hover:text-gray-500 transition duration-300 hover:scale-105"><FaGithub size={30}/></Link>
          <Link className="text-blue-950  hover:text-gray-500 transition duration-300 hover:scale-105" >< LinkedinOriginal  size={30}/></Link>
          <Link className="text-blue-400  hover:text-gray-500 transition duration-300 hover:scale-105"><FaTwitter size={30}/></Link>
          <Link className="  hover:text-gray-500 transition duration-300 hover:scale-105"><FacebookOriginal size={30}/></Link>
        </div>
        <div className="pb-4">
          <button className="btn btn-error ">Dowland Resume</button>
        </div>
      </div>
      <div>
        <div className="bannerImg"></div>
        <img className="lg:h-[580px] lg:w-[1200px] w-full" src={bannerImg} alt="" />
      </div>
      
    </div>
  </div>
  );
};

export default Banner;
