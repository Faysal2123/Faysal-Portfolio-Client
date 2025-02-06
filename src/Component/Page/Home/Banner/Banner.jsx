import React from "react";
import bannerImg from '../../../../assets/faysal.png';
import bannerImg2 from '../../../../assets/web-faysal.png'
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FacebookOriginal, LinkedinOriginal } from "devicons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
// framer-motion import

const Banner = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer', ' MERN Stack Developer', 'React Developer', ' JavaScript Developer'],
    loop: true,
    typeSpeed:20,
    deleteSpeed:10,
    delaySpeed:2000
  })
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-6">
      <div className="flex justify-between lg:flex-row flex-col-reverse w-11/12 mx-auto">
        <motion.div
          className="space-y-2 flex flex-col justify-center text-slate-100 text-center lg:text-start mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <p className="lg:text-2xl text-xl font-semibold">Hello, I'm </p> */}
          <motion.h1
            className="lg:text-5xl text-3xl font-bold capitalize"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
          Hi, I'm <span className="text-rose-500">Mohammad Faysal</span>  
          </motion.h1>
          <h4 className="lg:text-3xl text-2xl font-semibold lg:pt-2 pt-1">A <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#e11d48"></Cursor></h4>
          <p className="lg:text-lg lg:w-11/12 lg:pt-6 pt-3 text-balance">
          Passionate MERN stack developer skilled in building dynamic, responsive, and user-friendly web applications. With expertise in React, Node.js, Express, and MongoDB, I create seamless digital experiences through clean, efficient, and scalable code. Excited to collaborate and turn ideas into reality with modern web technologies!
          </p>
          <motion.div
            className="flex gap-6 pt-4 justify-center pb-3 lg:justify-start"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a target="_blank" href='https://github.com/Faysal2123' className="hover:text-gray-500 transition duration-300 hover:scale-105">
              <FaGithub size={30} />
            </a>
            <a target="_blank" href='https://www.linkedin.com/in/mohammad-foysal-dev/' className="text-blue-950 hover:text-gray-500 transition duration-300 hover:scale-105">
              <LinkedinOriginal size={30} />
            </a>
            <a target="_blank" href="https://x.com/Mohammadfo89815" className="text-blue-400 hover:text-gray-500 transition duration-300 hover:scale-105">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.facebook.com/share/1LVhG6SqFC/" target="_blank" className="hover:text-gray-500 transition duration-300 hover:scale-105">
              <FacebookOriginal size={30} />
            </a>
          </motion.div>
          <div className="pb-4">
            <a
              href="https://drive.google.com/uc?export=download&id=14N7Zm00p1Eowth3qlYaT5HBm0efyIoNc"
              download="Mohammad_Faysal_Resume.pdf"
              className="btn btn-error lg:font-bold text-white"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
        <div>
          <img className="lg:h-[580px] lg:w-[1100px] w-full overflow-hidden" src={bannerImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
