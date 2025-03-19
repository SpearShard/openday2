'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-lime-400 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24"
    >
      {/* Left Content - About Open Day */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        className="w-full md:w-2/3 pr-10" // Added pr-10 for spacing
      >
        <h2 className="text-5xl md:text-7xl font-extrabold text-black leading-tight">
          Bigger. Bolder.
        </h2>
        <h2 className="text-6xl md:text-8xl font-extrabold text-black mt-2">
          Unmissable.
        </h2>
        
        {/* About Open Day */}
        <p className="mt-6 text-lg md:text-xl text-black font-medium">
          <span className="font-bold">About CIT Open Day</span> — A celebration of **innovation, technology, and creativity**.  
          Dive into a day of exploration, inspiration, and hands-on experiences at **Cambridge Institute of Technology**.
        </p>
        <p className="mt-4 text-lg md:text-xl text-black font-medium">
          🚀 **Come Explore, Innovate, Enjoy!**  
          Get ready to connect with **industry experts, faculty, and peers** as you discover cutting-edge programs,  
          exciting activities, and limitless opportunities at CIT.
        </p>

        {/* CTA Button */}
        <motion.a
          href="/register"
          className="mt-8 inline-block bg-pink-600 text-white text-lg font-bold px-6 py-3 rounded-md shadow-lg transition-all hover:scale-105"
          whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          REGISTER NOW 🚀
        </motion.a>
      </motion.div>

      {/* Right Content - Registration Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-bold text-black mb-4">Register Now</h3>
        <form>
          <select className="w-full p-3 border border-gray-300 rounded-md mb-4">
            <option>Individual Registration</option>
            <option>Group Registration</option>
          </select>
          <input type="text" placeholder="Name*" className="w-full p-3 border border-gray-300 rounded-md mb-4" />
          <input type="email" placeholder="Email*" className="w-full p-3 border border-gray-300 rounded-md mb-4" />
          <div className="flex gap-2 mb-4">
            <select className="w-1/3 p-3 border border-gray-300 rounded-md">
              <option>+91</option>
            </select>
            <input type="text" placeholder="Phone Number" className="w-2/3 p-3 border border-gray-300 rounded-md" />
          </div>
          <input type="text" placeholder="Select State" className="w-full p-3 border border-gray-300 rounded-md mb-4" />
          <input type="text" placeholder="City*" className="w-full p-3 border border-gray-300 rounded-md mb-4" />
          <select className="w-full p-3 border border-gray-300 rounded-md mb-4">
            <option>Class (Currently Pursuing in)</option>
          </select>
          <select className="w-full p-3 border border-gray-300 rounded-md mb-4">
            <option>Accompanied By (Including you)</option>
          </select>
          <motion.button
            type="submit"
            className="w-full bg-yellow-600 text-white font-bold text-lg p-3 rounded-md shadow-lg transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            REGISTER
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
