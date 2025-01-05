import React from 'react';
import img1 from '../../../assets/game1.png';
import img2 from '../../../assets/game2.png';
import img3 from '../../../assets/game3.png';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black w-full py-16">
      <div className="w-11/12 mx-auto space-y-8 text-center">
        <h1 className="text-5xl font-extrabold text-white">PORTFOLIO</h1>
        <p className="w-11/12 mx-auto md:text-lg text-gray-300">
          Welcome to my portfolio! I’m Mohammad Faysal, a passionate MERN stack web developer. I create dynamic, user-friendly web applications using modern technologies like React, Node.js, Express, and MongoDB. My goal is to build seamless, efficient, and scalable digital solutions. Explore my work, and feel free to reach out for collaborations!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 px-5 pt-10 text-white">
        {/* Card 1 */}
        <div className="shadow-xl rounded-2xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 lg:p-6 bg-gray-600">
          <img className="h-[300px] w-full object-cover shadow-lg p-6 rounded-lg border-2 border-slate-700" src={img1} alt="Games Review Project" />
          <div className="p-6 space-y-6 text-white">
            <h2 className="text-3xl font-semibold text-slate-100 leading-tight">Games Review Project</h2>
            <p className="text-slate-200 text-base">A platform to review the latest video games, allowing users to explore detailed reviews, ratings, and gameplay information.</p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link className="btn bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto text-center" to="https://assignment-10-212c3.web.app/">Live Link</Link>
              <Link className="btn bg-gray-600 text-white hover:bg-gray-700 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto text-center " to="https://github.com/programming-hero-web-course2/b10-a10-client-side-Faysal2123">Github Repo</Link>
              <Link className="btn bg-green-600 text-white hover:bg-green-700 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto text-center" to={`/details/1`}>View Details</Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="shadow-xl rounded-2xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 lg:p-6 bg-gray-600">
          <img className="h-[300px] w-full object-cover shadow-lg p-6 rounded-lg border-2 border-slate-700" src={img2} alt="Car's Rental Project" />
          <div className="p-6 space-y-6">
            <h2 className="text-3xl text-slate-100 font-semibold leading-tight">Car's Rental Project</h2>
            <p className="text-slate-200 text-base">An online platform for booking car rentals, providing users with various car models, rental terms, and payment options.</p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link className="btn bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto text-center" to="https://assignment-11-9153e.web.app/">Live Link</Link>
              <Link className="btn bg-gray-600 text-white hover:bg-gray-700 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto text-center" to="https://github.com/programming-hero-web-course2/b10a11-client-side-Faysal2123">Github Repo</Link>
              <Link className="btn bg-green-600 text-white hover:bg-green-700 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto text-center" to={`/details/2`}>View Details</Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="shadow-xl rounded-2xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 lg:p-6 bg-gray-600">
          <img className="h-[300px] w-full object-cover shadow-lg p-6 rounded-lg border-2 border-slate-700" src={img3} alt="Gadget Haven Project" />
          <div className="p-6 space-y-6">
            <h2 className="text-3xl font-semibold text-slate-100 leading-tight">Coupon Collecting Platform</h2>
            <p className="text-slate-200 text-base">A digital marketplace for gadgets, offering users the ability to browse and purchase the latest tech products.</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link className="btn bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto text-center" to="https://assignment-9-fb7fb.web.app/">Live Link</Link>
              <Link className="btn bg-gray-600 text-white hover:bg-gray-700 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto text-center" to="https://github.com/programming-hero-web-course1/b10-a9-authentication-Faysal2123">Github Repo</Link>
              <Link className="btn bg-green-600 text-white hover:bg-green-700 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg w-full sm:w-auto text-center" to={`/details/3`}>View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
