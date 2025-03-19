'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { section } from 'framer-motion/client';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const countdownRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: countdownRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Set the event date - April 19, 2024
  const eventDate = new Date('2024-04-19T09:00:00').getTime();

  useEffect(() => {
    // Simulate loading
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(loadTimer);
    };
  }, [eventDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const numberVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const hoverVariants = {
    hover: (i: number) => ({
      scale: 1.1,
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      background: `linear-gradient(135deg, 
        ${i === 0 ? 'rgba(236, 72, 153, 0.3)' : 
          i === 1 ? 'rgba(139, 92, 246, 0.3)' : 
            i === 2 ? 'rgba(59, 130, 246, 0.3)' : 
              'rgba(16, 185, 129, 0.3)'} 0%, 
        ${i === 0 ? 'rgba(244, 114, 182, 0.1)' : 
          i === 1 ? 'rgba(167, 139, 250, 0.1)' : 
            i === 2 ? 'rgba(96, 165, 250, 0.1)' : 
              'rgba(52, 211, 153, 0.1)'} 100%)`,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    })
  };

  // Loading animation variants
  const loadingVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Fractal animation for the background
  const fractalVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 120,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <section id="countdown" className="relative py-20 min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Elaborate fractal background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 240, ease: "linear", repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-10"
        >
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fractalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="25%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="75%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Sierpinski triangle fractal */}
            <g filter="url(#glow)">
              {[...Array(6)].map((_, i) => (
                <motion.g 
                  key={i}
                  animate={{ rotate: 360 * (i % 2 === 0 ? 1 : -1) }}
                  transition={{ duration: 120 + i * 20, ease: "linear", repeat: Infinity }}
                >
                  <path 
                    d={`M400,100 L100,600 L700,600 Z M400,200 L250,500 L550,500 Z M400,300 L325,450 L475,450 Z`} 
                    fill="none" 
                    stroke="url(#fractalGrad1)" 
                    strokeWidth={0.5 + i * 0.2} 
                    opacity={0.7 - i * 0.1}
                    transform={`scale(${1 - i * 0.1}) rotate(${i * 30})`}
                  />
                </motion.g>
              ))}
            </g>
            
            {/* Mandelbrot-inspired elements */}
            <g opacity="0.4">
              {[...Array(8)].map((_, i) => (
                <motion.circle
                  key={`circle-${i}`}
                  cx="400"
                  cy="400"
                  r={50 + i * 40}
                  fill="none"
                  stroke="url(#fractalGrad1)"
                  strokeWidth="0.5"
                  strokeDasharray={`${5 + i * 10} ${10 + i * 5}`}
                  animate={{ 
                    rotate: 360 * (i % 2 === 0 ? 1 : -1),
                    strokeDashoffset: [0, 1000 * (i % 2 === 0 ? 1 : -1)]
                  }}
                  transition={{ 
                    duration: 80 + i * 10, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                />
              ))}
            </g>
          </svg>
        </motion.div>
      </div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, 
                rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7) 0%, 
                rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0) 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Loading animation */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          >
            <motion.div 
              className="relative"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity
              }}
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-16 rounded-full"
                  style={{
                    border: `3px solid transparent`,
                    borderTopColor: i === 0 ? '#EC4899' : i === 1 ? '#8B5CF6' : i === 2 ? '#3B82F6' : '#10B981',
                    borderRightColor: i === 0 ? '#EC4899' : i === 1 ? '#8B5CF6' : i === 2 ? '#3B82F6' : '#10B981',
                    transform: `rotate(${i * 45}deg) scale(${1 - i * 0.15})`,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 1.5 + i * 0.5,
                    ease: "linear",
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
              <motion.div
                className="text-white text-xl font-bold"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Loading
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        ref={countdownRef}
        style={{ opacity, scale }}
        variants={loadingVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold mb-8 text-center"
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">
              Countdown to Innovation
            </span>
          </motion.h2>
          
          <motion.div 
            variants={pulseVariants}
            animate="pulse"
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {timeUnits.map((unit, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                whileHover="hover"
                onHoverStart={() => setIsHovering(index)}
                onHoverEnd={() => setIsHovering(null)}
                className="relative"
              >
                <motion.div
                  custom={index}
                  variants={hoverVariants}
                  className={`w-24 h-28 md:w-40 md:h-44 rounded-2xl backdrop-blur-lg flex flex-col items-center justify-center border border-white/20 relative overflow-hidden
                    ${index === 0 ? 'bg-gradient-to-br from-pink-500/10 to-rose-500/10' : 
                      index === 1 ? 'bg-gradient-to-br from-violet-500/10 to-purple-500/10' : 
                        index === 2 ? 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10' : 
                          'bg-gradient-to-br from-emerald-500/10 to-teal-500/10'}`}
                  >
                    {/* Animated particles inside each countdown box */}
                    {isHovering === index && (
                      <>
                        {[...Array(15)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              background: `radial-gradient(circle, 
                                ${index === 0 ? 'rgba(236, 72, 153, 0.8)' : 
                                  index === 1 ? 'rgba(139, 92, 246, 0.8)' : 
                                    index === 2 ? 'rgba(59, 130, 246, 0.8)' : 
                                      'rgba(16, 185, 129, 0.8)'} 0%, 
                                rgba(255, 255, 255, 0) 70%)`,
                            }}
                            animate={{
                              x: [0, Math.random() * 60 - 30],
                              y: [0, Math.random() * 60 - 30],
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0]
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2 + Math.random() * 2,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </>
                    )}
                    
                    {/* Enhanced fractal-like background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id={`grad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={
                              index === 0 ? '#EC4899' : 
                                index === 1 ? '#8B5CF6' : 
                                  index === 2 ? '#3B82F6' : 
                                    '#10B981'
                            } />
                            <stop offset="100%" stopColor={
                              index === 0 ? '#F472B6' : 
                                index === 1 ? '#A78BFA' : 
                                  index === 2 ? '#60A5FA' : 
                                    '#34D399'
                            } />
                          </linearGradient>
                          <filter id={`glow${index}`} x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                        </defs>
                        
                        {/* Sierpinski triangle-inspired fractal */}
                        <g filter={`url(#glow${index})`}>
                          <path d="M10,30 Q50,10 90,30 Q50,50 10,70 Q50,90 90,70 Q50,50 10,30" fill="none" stroke={`url(#grad${index})`} strokeWidth="0.5" />
                          <path d="M30,10 Q10,50 30,90 Q50,50 70,90 Q90,50 70,10 Q50,50 30,10" fill="none" stroke={`url(#grad${index})`} strokeWidth="0.5" />
                          <path d="M50,10 L10,70 L90,70 Z" fill="none" stroke={`url(#grad${index})`} strokeWidth="0.3" />
                          <path d="M30,30 L50,10 L70,30 Z" fill="none" stroke={`url(#grad${index})`} strokeWidth="0.3" />
                          <path d="M10,70 L30,30 L50,70 Z" fill="none" stroke={`url(#grad${index})`} strokeWidth="0.3" />
                          <path d="M50,70 L70,30 L90,70 Z" fill="none" stroke={`url(#grad${index})`} strokeWidth="0.3" />
                          
                          <circle cx="50" cy="50" r="30" fill="none" stroke={`url(#grad${index})`} strokeWidth="0.5" />
                          <circle cx="50" cy="50" r="20" fill="none" stroke={`url(#grad${index})`} strokeWidth="0.5" />
                          <circle cx="50" cy="50" r="10" fill="none" stroke={`url(#grad${index})`} strokeWidth="0.5" />
                        </g>
                        
                        {/* Animated rotation */}
                        <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 50 50"
                          to="360 50 50"
                          dur="60s"
                          repeatCount="indefinite"
                        />
                      </svg>
                    </div>
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={unit.value}
                        variants={numberVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`text-4xl md:text-6xl font-bold mb-1 font-mono relative
                          ${index === 0 ? 'text-pink-400' : 
                            index === 1 ? 'text-violet-400' : 
                              index === 2 ? 'text-blue-400' : 
                                'text-emerald-400'}`}
                      >
                        {/* Text shadow effect */}
                        <span className="absolute inset-0 blur-sm opacity-70">
                          {unit.value < 10 ? `0${unit.value}` : unit.value}
                        </span>
                        {unit.value < 10 ? `0${unit.value}` : unit.value}
                      </motion.div>
                    </AnimatePresence>
                    
                    <div className={`text-xs md:text-sm uppercase tracking-wider font-medium
                      ${index === 0 ? 'text-pink-300' : 
                        index === 1 ? 'text-violet-300' : 
                          index === 2 ? 'text-blue-300' : 
                            'text-emerald-300'}`}>
                      {unit.label}
                    </div>
                    
                    {/* Enhanced glowing effect on hover */}
                    {isHovering === index && (
                      <motion.div 
                        className="absolute inset-0 rounded-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          boxShadow: `0 0 30px 10px ${
                            index === 0 ? 'rgba(236, 72, 153, 0.4)' : 
                              index === 1 ? 'rgba(139, 92, 246, 0.4)' : 
                                index === 2 ? 'rgba(59, 130, 246, 0.4)' : 
                                  'rgba(16, 185, 129, 0.4)'
                          }`,
                          zIndex: -1
                        }}
                      />
                    )}
                    
                    {/* Pulsing ring animation */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-transparent"
                      style={{
                        borderColor: index === 0 ? 'rgba(236, 72, 153, 0.3)' : 
                          index === 1 ? 'rgba(139, 92, 246, 0.3)' : 
                            index === 2 ? 'rgba(59, 130, 246, 0.3)' : 
                              'rgba(16, 185, 129, 0.3)'
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"
          />
          <motion.p 
            className="text-xl md:text-2xl text-white/80 font-light italic"
            animate={{ 
              color: ["rgba(255,255,255,0.8)", "rgba(236, 72, 153, 0.8)", "rgba(139, 92, 246, 0.8)", "rgba(59, 130, 246, 0.8)", "rgba(16, 185, 129, 0.8)", "rgba(255,255,255,0.8)"] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            Secure your spot before time runs out!
          </motion.p>
          
          {/* Added call-to-action button with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6"
          >
            <motion.a
              href="/register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
            >
              Register Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}