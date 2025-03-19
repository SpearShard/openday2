// src/app/components/About.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    }),
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  return (
    <section id="about" className="py-24 relative">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4 inline-block bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            Experience Tech Fest 2024
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-accent"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 text-xl text-foreground font-sans max-w-3xl mx-auto"
          >
            The most anticipated tech event of the year where innovation meets opportunity
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <motion.div
                custom={0}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-foreground/10 hover:border-primary/50 transform transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">Innovation Hub</h3>
                    <p className="text-foreground font-sans">
                      Immerse yourself in cutting-edge technologies and groundbreaking ideas. Connect with industry pioneers who are shaping the future of tech right before your eyes.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                custom={1}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-foreground/10 hover:border-accent/50 transform transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="mr-4 bg-accent/20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-accent">Hands-on Experience</h3>
                    <p className="text-foreground font-sans">
                      Don't just watch—participate! Get hands-on with workshops, hackathons, and interactive demos that will transform your skills and ignite your creativity.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                custom={2}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-foreground/10 hover:border-primary/50 transform transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">Career-Defining Networking</h3>
                    <p className="text-foreground font-sans">
                      Make connections that matter. Meet industry leaders, potential employers, and collaborators who can take your career to unprecedented heights.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, rotateY: 30 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="relative w-full max-w-md"
            >
              <motion.div
                animate={{
                  rotateY: [-5, 5, -5],
                  rotateX: [2, -2, 2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'easeInOut',
                }}
                className="relative bg-gradient-to-r from-primary/40 to-accent/40 backdrop-blur-md p-8 rounded-2xl border border-foreground/10 shadow-2xl transform transition-all duration-500 hover:scale-105"
              >
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="aspect-square bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center p-4 shadow-lg"
                  >
                    <span className="text-5xl">💻</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="aspect-square bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center p-4 shadow-lg"
                  >
                    <span className="text-5xl">🚀</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="aspect-square bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center p-4 shadow-lg"
                  >
                    <span className="text-5xl">🔮</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="aspect-square bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center p-4 shadow-lg"
                  >
                    <span className="text-5xl">🌐</span>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-6 text-center"
                >
                  <h3 className="text-xl font-bold text-foreground">Tech Fest 2024</h3>
                  <p className="text-foreground/70 mt-2 font-sans">April 19, 2024</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '20+', label: 'Speakers', color: 'from-primary to-accent', icon: '🎤' },
              { number: '10+', label: 'Workshops', color: 'from-accent to-primary', icon: '🔧' },
              { number: '500+', label: 'Attendees', color: 'from-primary to-accent', icon: '👥' },
              { number: '24h', label: 'Hackathon', color: 'from-accent to-primary', icon: '⏱️' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={statsVariants}
                className="bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-foreground/10 text-center transform transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.transform = `perspective(1000px) rotateX(${Math.random() * 5 - 2.5}deg) rotateY(${Math.random() * 5 - 2.5}deg) scale(1.1)`;
                  target.style.boxShadow = `0 25px 50px -12px rgba(${index % 2 === 0 ? '111, 25, 224' : '245, 116, 29'}, 0.25)`;
                  target.style.borderColor = `rgba(${index % 2 === 0 ? '111, 25, 224' : '245, 116, 29'}, 0.5)`;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.transform = '';
                  target.style.boxShadow = '';
                  target.style.borderColor = '';
                }}
              >
                <div className="mb-3 text-3xl opacity-70 group-hover:opacity-100 group-hover:animate-bounce">{stat.icon}</div>
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text group-hover:scale-110 transition-transform`}>{stat.number}</div>
                <div className="text-foreground group-hover:text-foreground/80 transition-colors font-sans">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-heading mb-4 inline-block bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">What Attendees Say</h3>
              <div className="w-16 h-1 mx-auto bg-gradient-to-r from-primary to-accent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: 'Tech Fest changed my career trajectory. The connections I made led directly to my dream job!',
                  name: 'Alex Chen',
                  role: 'Software Engineer',
                  gradient: 'from-primary to-accent',
                },
                {
                  quote: 'The workshops were incredible - I learned more in one day than in months of online courses.',
                  name: 'Sarah Johnson',
                  role: 'UX Designer',
                  gradient: 'from-accent to-primary',
                },
                {
                  quote: "As a startup founder, the mentorship I received was invaluable. Can't wait for next year!",
                  name: 'Michael Rodriguez',
                  role: 'Tech Entrepreneur',
                  gradient: 'from-primary to-accent',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-foreground/10 transform transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="absolute -right-4 -top-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">❝</div>
                  <p className="text-foreground mb-6 relative z-10 font-sans">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center font-bold text-background`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-foreground/70 font-sans">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-24 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary/70 via-accent/70 to-primary/70 z-0 rounded-2xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }}
            ></div>

            <div className="relative z-10 p-10 text-center">
              <h3 className="text-3xl font-heading mb-4 text-background">Ready to be part of something extraordinary?</h3>
              <p className="text-xl text-background/70 mb-8 max-w-2xl mx-auto font-sans">
                Join us at Tech Fest 2024 and experience the future of technology firsthand.
              </p>
              <a
                href="/register"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-background font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.boxShadow = '0 0 20px rgba(111, 25, 224, 0.5)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.boxShadow = '';
                }}
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}