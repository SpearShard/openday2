// src/app/components/Venue.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiMapPin, FiClock, FiCalendar, FiNavigation, FiHome, FiWifi } from 'react-icons/fi';

export default function Venue() {
  const handleGetDirections = () => {
    window.open('https://maps.google.com/?q=Cambridge+Institute+of+Technology+Bangalore', '_blank');
  };

  return (
    <section id="venue" className="min-h-screen relative flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 via-blue-200 to-teal-200 opacity-90" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center relative z-10"
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold uppercase mb-6 text-gray-800 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Venue
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto text-gray-700 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Join us at the prestigious Cambridge Institute of Technology campus in Bengaluru for an unforgettable day of innovation and learning!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Venue Image */}
          <motion.div
            className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src="/campus.jpg"
              alt="CIT Campus"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Venue Details */}
          <motion.div
            className="space-y-8 text-left bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FiMapPin className="w-6 h-6 mt-1 flex-shrink-0 text-purple-500" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Location</h3>
                  <p className="text-lg text-gray-700">
                    Cambridge Institute of Technology<br />
                    Krishnarajapuram, Bengaluru - 560036
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiCalendar className="w-6 h-6 mt-1 flex-shrink-0 text-pink-500" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Date & Time</h3>
                  <p className="text-lg text-gray-700">
                    April 19, 2025<br />
                    10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiHome className="w-6 h-6 mt-1 flex-shrink-0 text-blue-500" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Parking</h3>
                  <p className="text-lg text-gray-700">
                    Free parking available on campus<br />
                    Designated areas for visitors
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiWifi className="w-6 h-6 mt-1 flex-shrink-0 text-teal-500" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Amenities</h3>
                  <p className="text-lg text-gray-700">
                    Free WiFi available<br />
                    Cafeteria and refreshments
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              onClick={handleGetDirections}
              className="flex items-center justify-center space-x-2 w-full md:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiNavigation className="w-5 h-5" />
              <span>Get Directions</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-16 w-full h-[400px] rounded-xl overflow-hidden shadow-2xl border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.008069343035!2d77.67315731578915!3d12.995509489883234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15986765d7d9%3A0x357ff1cbac4a09bb!2sCambridge%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1647777777777!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}