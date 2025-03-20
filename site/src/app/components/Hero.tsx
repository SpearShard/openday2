'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { BackgroundGradientAnimation } from '@/app/components/BackgroundGradientAnimation';

export default function Hero() {
  // Rotating headlines
  const headlines = [
    {
      title: 'EXPERIENCE INNOVATION',
      subtitle: 'Join the Future of Learning',
      details: '19 April 2025 • 10 AM - 5 PM • CIT, Bengaluru'
    },
    {
      title: 'CIT OPEN DAY 2025',
      subtitle: 'Engage. Immerse. Belong.',
      details: '19 April 2025 • 10 AM - 5 PM • CIT, Bengaluru'
    },
    {
      title: 'EXPLORE. CONNECT. GROW.',
      subtitle: 'Your Future Starts Here',
      details: '19 April 2025 • 10 AM - 5 PM • CIT, Bengaluru'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(108, 0, 162)"
      gradientBackgroundEnd="rgb(0, 17, 82)"
      firstColor="18, 113, 255"
      secondColor="221, 74, 255"
      thirdColor="100, 220, 255"
      fourthColor="200, 50, 50"
      fifthColor="180, 180, 50"
      pointerColor="140, 100, 255"
      size="80%"
      blendingValue="hard-light"
      containerClassName="relative"
    >
      {/* Content */}
      <div className="relative z-10 px-6 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Animated Headline */}
        <div className="relative h-32 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase text-white"
            >
              {headlines[activeIndex].title}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Animated Subtitle and Details */}
        <div className="relative flex flex-col items-center justify-center space-y-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${activeIndex}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
              className="text-2xl md:text-3xl font-light text-white/90"
            >
              {headlines[activeIndex].subtitle}
            </motion.p>
            <motion.p
              key={`details-${activeIndex}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
              className="text-lg md:text-xl font-medium text-white/80"
            >
              {headlines[activeIndex].details}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <motion.button
            className="px-8 py-4 rounded-full bg-white text-black text-xl font-bold shadow-lg transition-all hover:bg-white/90 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>REGISTER NOW</span>
            <FiArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-xl font-bold shadow-lg transition-all hover:bg-white/20 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW SCHEDULE
          </motion.button>
        </div>

        {/* Dot Navigation */}
        <div className="mt-8 flex justify-center space-x-3">
          {headlines.map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${activeIndex === i ? 'bg-white' : 'bg-white/50'
                }`}
              whileHover={{ scale: 1.3 }}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
