import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

const About = () => {
  return (
    <div className="bg-[#1f242d] text-white lg:pt-28 lg:pb-28 pt-10 pb-10">
      <motion.h1
        className="lg:text-5xl text-4xl text-center font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="text-center lg:w-10/12 w-11/12 mx-auto pt-8 lg:text-lg text-balance"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Hello, I'm Mohammad Faysal, a dedicated MERN stack web developer who thrives on building interactive and user-centric web applications. I specialize in React.js, Node.js, Express.js, and MongoDB, ensuring seamless and efficient solutions. My journey in web development started with a curiosity for coding, which turned into a deep passion for building interactive and scalable web applications. I enjoy tackling challenging problems and enhancing performance to deliver a seamless user experience. Writing clean, efficient code and creating responsive designs are my key priorities. I am always eager to learn new technologies and stay updated with industry trends. Whether it's front-end development with React or back-end APIs with Node.js, I strive to deliver high-quality digital solutions. If you're looking for a dedicated developer to bring your ideas to life, let's connect and create something amazing together!
      </motion.p>
    </div>
  );
};

export default About;
