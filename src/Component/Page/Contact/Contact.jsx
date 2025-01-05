import { LinkedinOriginal } from "devicons-react";
import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import  { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_2sag44u", "template_wxx7uql", form.current, {
        publicKey: "C3LwuRhA4YDpOqjr-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 w-11/12 mx-auto gap-10">
        <div className="md:col-span-1">
          <h1 className="text-4xl font-extrabold text-white text-center mb-6">
            Let's Discuss Your Project!
          </h1>
          <div className="flex items-center justify-center mb-3 gap-2">
            <p className="text-lg font-semibold text-gray-300 text-center">
              GET IN TOUCH{" "}
            </p>
            <div>
              <LuMessageSquareMore size={25} />
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-gray-800/80 p-6 rounded-2xl shadow-lg flex flex-col items-center transition-all duration-300 hover:scale-105 hover:bg-gray-700/90">
            <MdEmail className="text-blue-500" size={50} />
            <h2 className="text-xl font-medium mt-3">Email</h2>
            <p className="text-gray-300">foysal2005n1@gmail.com</p>
            <Link
              to="mailto:foysal2005n1@gmail.com"
              className="mt-3 text-blue-400 hover:text-blue-300 underline"
            >
              Send a Message
            </Link>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-gray-800/80 p-6 rounded-2xl shadow-lg flex flex-col items-center mt-6 transition-all duration-300 hover:scale-105 hover:bg-gray-700/90">
            <LinkedinOriginal size={50} className="text-blue-600" />
            <h2 className="text-xl font-medium mt-3">LinkedIn</h2>
            <p className="text-gray-300">linkedin.com/in/yourprofile</p>
            <Link
              to="https://linkedin.com/in/yourprofile"
              target="_blank"
              className="mt-3 text-blue-400 hover:text-blue-300 underline"
            >
              Connect Now
            </Link>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-gray-800/80 p-6 rounded-2xl shadow-lg flex flex-col items-center mt-6 transition-all duration-300 hover:scale-105 hover:bg-gray-700/90">
            <FaWhatsappSquare className="text-green-500" size={50} />
            <h2 className="text-xl font-medium mt-3">WhatsApp</h2>
            <p className="text-gray-300">01309726082</p>
            <Link
              to="https://wa.me/01309726082"
              target="_blank"
              className="mt-3  text-blue-400 hover:text-blue-300 underline"
            >
              Chat Now
            </Link>
          </div>
        </div>

        <div className="md:col-span-3 bg-gray-900/80 p-10 rounded-2xl shadow-2xl flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-200 mb-8 text-center">
            Contact Me
          </h2>
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            {/* Name Input */}
            <div className="form-control">
              <label className="text-gray-300">Name</label>
              <input
              name="from_name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered bg-gray-800 text-white border-gray-600 focus:ring-blue-400 focus:border-blue-400 rounded-lg p-3"
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-control">
              <label className="text-gray-300">Email</label>
              <input
              name="from_email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered bg-gray-800 text-white border-gray-600 focus:ring-blue-400 focus:border-blue-400 rounded-lg p-3"
                required
              />
            </div>

            {/* Message Input */}
            <div className="form-control">
              <label className="text-gray-300">Message</label>
              <textarea
              name="message"
                placeholder="Write your message here..."
                className="textarea textarea-bordered bg-gray-800 text-white border-gray-600 focus:ring-blue-400 focus:border-blue-400 rounded-lg p-3 h-32"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/50">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
