import React from 'react';
import img1 from '../../../assets/game1.png';
import img2 from '../../../assets/game2.png';
import img3 from '../../../assets/game3.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeSlideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0, // Duration of animation
      ease: "easeInOut",
      staggerChildren: 0.2, // Delay between elements
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" }
  },
};

const Portfolio = () => {
  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeSlideVariants}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black w-full py-16"
    >
      <motion.div 
        variants={fadeSlideVariants}
        className="w-11/12 mx-auto space-y-8 text-center"
      >
        <h1 className="text-5xl font-extrabold text-white">PORTFOLIO</h1>
        <p className="w-11/12 mx-auto md:text-lg text-gray-300">
          Welcome to my portfolio! I’m Mohammad Faysal, a passionate MERN stack web developer. I create dynamic, user-friendly web applications using modern technologies like React, Node.js, Express, and MongoDB. My goal is to build seamless, efficient, and scalable digital solutions. Explore my work, and feel free to reach out for collaborations!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 px-5 pt-10 text-white">
        {[
          { img: img1, title: "Games Review Project", desc: "A platform to review the latest video games, allowing users to explore detailed reviews, ratings, and gameplay information.", live: "https://assignment-10-212c3.web.app/", repo: "https://github.com/programming-hero-web-course2/b10-a10-client-side-Faysal2123", details: "/details/1" },
          { img: img2, title: "Car's Rental Project", desc: "An online platform for booking car rentals, providing users with various car models, rental terms, and payment options.", live: "https://assignment-11-9153e.web.app/", repo: "https://github.com/programming-hero-web-course2/b10a11-client-side-Faysal2123", details: "/details/2" },
          { img: img3, title: "Coupon Collecting Platform", desc: "A digital marketplace for gadgets, offering users the ability to browse and purchase the latest tech products.", live: "https://assignment-9-fb7fb.web.app/", repo: "https://github.com/programming-hero-web-course1/b10-a9-authentication-Faysal2123", details: "/details/3" }
        ].map((project, index) => (
          <motion.div 
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="shadow-xl rounded-2xl overflow-hidden transform transition-transform duration-300 lg:p-6 bg-gray-600"
          >
            <img className="h-[300px] w-full object-cover shadow-lg p-6 rounded-lg border-2 border-slate-700" src={project.img} alt={project.title} />
            <div className="p-6 space-y-6">
              <h2 className="text-3xl font-semibold text-slate-100 leading-tight">{project.title}</h2>
              <p className="text-slate-200 text-base">{project.desc}</p>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link className="btn bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto text-center" to={project.live}>Live Link</Link>
                <Link className="btn bg-gray-600 text-white hover:bg-gray-700 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto text-center" to={project.repo}>Github Repo</Link>
                <Link className="btn bg-green-600 text-white hover:bg-green-700 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto text-center" to={project.details}>View Details</Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
