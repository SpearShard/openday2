'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  // Rotating headlines
  const headlines = [
    { title: 'EXPERIENCE INNOVATION', subtitle: 'Join the Future of Learning' },
    { title: 'CIT OPEN DAY 2025', subtitle: 'Engage. Immerse. Belong.' },
    { title: 'EXPLORE. CONNECT. GROW.', subtitle: 'Your Future Starts Here' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center bg-yellow-400 text-black font-['Space Grotesk']">
      {/* CITech Open Day Box */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3/4 md:w-2/3 lg:w-1/2 bg-black text-yellow-400 py-4 px-6 text-3xl md:text-5xl font-extrabold shadow-xl rounded-lg flex justify-center items-center"
      >
        CIT OPEN DAY 2025 
      </motion.div>

      {/* Event Date & Location */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 px-8 py-3 rounded-full text-xl font-bold bg-black text-yellow-400 shadow-md"
      >
        19 April 2025 • 10 AM - 5 PM
      </motion.div>

      {/* Animated Headline */}
      <div className="relative h-24 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h1
            key={activeIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="text-7xl md:text-8xl font-extrabold uppercase"
          >
            {headlines[activeIndex].title}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Animated Subtitle */}
      <div className="relative h-16 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
            className="text-2xl md:text-3xl font-light"
          >
            {headlines[activeIndex].subtitle}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Call to Action */}
      <div className="flex space-x-4 mt-10">
        <motion.button
          className="px-8 py-4 rounded-full bg-black text-yellow-400 text-xl font-bold shadow-lg transition-all hover:scale-105"
          whileTap={{ scale: 0.95 }}
        >
          REGISTER NOW 🚀
        </motion.button>
        <motion.button
          className="px-8 py-4 rounded-full border-2 border-black text-black text-xl font-bold transition-all hover:bg-black hover:text-yellow-400"
          whileTap={{ scale: 0.95 }}
        >
          VIEW SCHEDULE 📅
        </motion.button>
      </div>

      {/* Dot Navigation */}
      <div className="mt-8 flex space-x-3">
        {headlines.map((_, i) => (
          <motion.div
            key={i}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              activeIndex === i ? 'bg-black' : 'bg-gray-600'
            }`}
            whileHover={{ scale: 1.3 }}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
