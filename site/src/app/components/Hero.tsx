// src/app/components/Hero.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  // Interactive state for rotating headings
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate headings
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % headings.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Rotating headings for Intuit Open Day
  const headings = [
    {
      title: 'Intuit CIT Open Day',
      subtitle: 'Discover Innovation',
      color: 'from-primary to-primary/70',
    },
    {
      title: 'Join Our Team',
      subtitle: 'Shape the Future',
      color: 'from-primary to-primary/70',
    },
    {
      title: 'Tech Showcase',
      subtitle: 'Experience Excellence',
      color: 'from-primary to-primary/70',
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background with gradient and noise */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
        {/* Noise texture */}
        <div
          className="absolute inset-0"
          style={{
            background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAA1BMVEW/v7/OT+5LAAAAM0lEQVR4nO3BgQAAAADDoPtTH2kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8G4IAAQeP8pYAAAAASUVORK5CYII=') repeat",
            opacity: 0.05,
          }}
        />
        {/* Particles */}
        {Array.from({ length: 50 }).map((_, i) => {
          const size = Math.random() * 4 + 2;
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const duration = Math.random() * 20 + 10;
          const delay = Math.random() * 5;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${initialX}%`,
                top: `${initialY}%`,
                background: 'linear-gradient(to right, #6f19e0, #a855f7)',
                boxShadow: `0 0 ${size * 2}px ${size / 2}px rgba(111, 25, 224, 0.5)`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full w-full flex flex-col">
        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center px-8 md:px-16 py-12">
          {/* Centered content */}
          <div className="w-full max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-sans">
                May 15-16, 2024 • Virtual & In-Person
              </span>
            </motion.div>

            <div className="relative h-32 mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="text-5xl md:text-6xl font-heading tracking-tight absolute"
                >
                  <span className={`bg-gradient-to-r ${headings[activeIndex].color} text-transparent bg-clip-text`}>
                    {headings[activeIndex].title}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            <div className="relative h-16 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
                  className="text-2xl text-primary font-sans absolute"
                >
                  {headings[activeIndex].subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              className="text-primary/70 text-lg mb-8 font-sans transition-colors duration-300 hover:text-primary/80"
              whileHover={{ scale: 1.02 }}
            >
              Join us for an exclusive look inside Intuit's innovative culture, cutting-edge technologies, and career opportunities. Connect with our team and discover how we power prosperity around the world.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-6 py-3 rounded-lg bg-primary text-background font-sans font-medium transition-colors duration-300 hover:bg-primary/80"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 20px -10px rgba(111, 25, 224, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Register for Free
              </motion.button>

              <motion.button
                className="px-6 py-3 rounded-lg border border-primary/50 text-primary font-sans font-medium hover:bg-primary/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Schedule
              </motion.button>
            </div>

            <div className="mt-12 flex items-center space-x-4 justify-center">
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className={`w-3 h-3 rounded-full ${activeIndex === i ? 'bg-primary' : 'bg-primary/30'}`}
                    whileHover={{ scale: 1.5 }}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <motion.div
            className="w-8 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}