'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

export default function Venue() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const venueDetails = {
    name: "TechHub Convention Center",
    address: "123 Innovation Boulevard, San Francisco, CA 94105",
    description: "Located in the heart of the city's tech district, TechHub Convention Center offers state-of-the-art facilities with cutting-edge technology infrastructure, spacious exhibition halls, and comfortable meeting spaces.",
    amenities: [
      { name: "High-speed WiFi", icon: "📶" },
      { name: "Charging stations", icon: "🔌" },
      { name: "Catering services", icon: "🍽️" },
      { name: "Accessible facilities", icon: "♿" },
      { name: "Parking available", icon: "🅿️" },
      { name: "Public transit nearby", icon: "🚇" }
    ],
    transportation: [
      { method: "By Car", directions: "Parking available on-site. Enter from Innovation Boulevard." },
      { method: "By Public Transit", directions: "Tech Station is a 5-minute walk. Bus routes 42, 55, and 67 stop directly in front." },
      { method: "By Rideshare", directions: "Dedicated pickup/dropoff zone at the main entrance." }
    ],
    mapUrl: "https://maps.google.com/?q=37.7749,-122.4194"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="venue" className="py-24 bg-gradient-to-b from-black via-teal-950/30 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -20, 0], 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25,
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-3xl"
        />
      </div>
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 inline-block bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-400 text-transparent bg-clip-text">
            Event Venue
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 mx-auto bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-400"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Join us at our state-of-the-art venue in the heart of the city
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
            <Image 
              src="/venue.jpg" 
              alt={venueDetails.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-bold text-white">{venueDetails.name}</h3>
              <p className="text-gray-300">{venueDetails.address}</p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-teal-300">About the Venue</h3>
              <p className="text-gray-300">{venueDetails.description}</p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4 text-teal-300">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {venueDetails.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                    <span className="text-2xl">{amenity.icon}</span>
                    <span className="text-gray-300">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4 text-teal-300">Getting There</h3>
              <div className="space-y-4">
                {venueDetails.transportation.map((transport, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <h4 className="font-bold text-white mb-1">{transport.method}</h4>
                    <p className="text-gray-300">{transport.directions}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
              <Link 
                href={venueDetails.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full text-white font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-teal-600 hover:to-emerald-700"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                View on Map
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}