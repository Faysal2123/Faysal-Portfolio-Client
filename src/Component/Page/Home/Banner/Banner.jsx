import React from "react";
import bannerImg from '../../../../assets/faysal.png';
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FacebookOriginal, LinkedinOriginal } from "devicons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // framer-motion import

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-6">
      <div className="flex justify-between lg:flex-row flex-col-reverse w-11/12 mx-auto">
        <motion.div
          className="space-y-2 flex flex-col justify-center text-slate-100 text-center lg:text-start mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="lg:text-2xl text-xl font-semibold">Hello, I'm </p>
          <motion.h1
            className="lg:text-5xl text-4xl font-bold"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Mohammad Faysal
          </motion.h1>
          <h4 className="lg:text-2xl text-xl font-semibold lg:pt-2 pt-1">Mern Stack Web Developer</h4>
          <p className="lg:text-lg lg:w-11/12 lg:pt-6 pt-3">
            Hi, I'm Mohammad Faysal, a passionate MERN stack web developer. I specialize in creating dynamic, responsive, and user-friendly web applications. With expertise in React, Node.js, Express, and MongoDB, I craft seamless digital experiences. I thrive on tackling challenges with clean, efficient, and scalable code. Let's collaborate to turn ideas into reality with modern web technologies!
          </p>
          <motion.div
            className="flex gap-6 pt-4 justify-center pb-3 lg:justify-start"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a target="_blanl" href='https://github.com/' className="hover:text-gray-500 transition duration-300 hover:scale-105">
              <FaGithub size={30} />
            </a>
            <a target="_blank" href='https://www.linkedin.com/feed/' className="text-blue-950 hover:text-gray-500 transition duration-300 hover:scale-105">
              <LinkedinOriginal size={30} />
            </a>
            <a target="_blank" href="https://x.com/home" className="text-blue-400 hover:text-gray-500 transition duration-300 hover:scale-105">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" className="hover:text-gray-500 transition duration-300 hover:scale-105">
              <FacebookOriginal size={30} />
            </a>
          </motion.div>
          <div className="pb-4">
            <a
              href="https://docs.google.com/document/d/1coTe6FrilEnxgm2Wl4m5Z8PyFWazE07xNs2qIBAFUjY/export?format=pdf"
              download="Mohammad_Faysal_Resume.pdf"
              className="btn btn-error lg:font-bold text-white"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
        <div>
          <img className="lg:h-[580px] lg:w-[1200px] w-full" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
