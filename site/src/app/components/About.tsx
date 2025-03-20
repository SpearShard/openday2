'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiCode, FiAward, FiTarget, FiTrendingUp, FiHeart, FiCalendar, FiMapPin, FiCpu, FiGlobe, FiZap } from 'react-icons/fi';

export default function About() {
  const stats = [
    { number: '2000+', label: 'Tech Enthusiasts', icon: FiUsers },
    { number: '100+', label: 'Tech Workshops', icon: FiCode },
    { number: '50+', label: 'Tech Companies', icon: FiGlobe },
    { number: '24hr', label: 'Hackathon', icon: FiZap },
  ];

  const features = [
    {
      title: 'Tech Showcase',
      description: 'Experience cutting-edge technology demonstrations, robotics, AI projects, and innovative student solutions.',
      icon: FiCpu,
    },
    {
      title: 'Hackathon',
      description: 'Participate in our 24-hour hackathon to build innovative solutions and compete for exciting prizes.',
      icon: FiCode,
    },
    {
      title: 'Tech Talks',
      description: 'Listen to industry experts share insights on emerging technologies and future tech trends.',
      icon: FiTrendingUp,
    },
    {
      title: 'Tech Career Fair',
      description: 'Connect with leading tech companies and explore internship and career opportunities.',
      icon: FiTarget,
    },
  ];

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="relative container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            CIT Tech Fest 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for an extraordinary celebration of technology, innovation, and creativity.
            Experience the future of tech firsthand.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div>
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <feature.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FiCalendar className="w-6 h-6 text-blue-600 mr-3" />
                <span className="text-gray-800 font-medium">April 15-16, 2025</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="w-6 h-6 text-blue-600 mr-3" />
                <span className="text-gray-800 font-medium">CIT Main Campus, Cambridge</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Register for Tech Fest</h3>
            <form className="space-y-4">
              <select className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Individual Registration</option>
                <option>Group Registration (Hackathon)</option>
              </select>
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="flex gap-2">
                <select className="w-1/3 p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>+91</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-2/3 p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <input
                type="text"
                placeholder="Select State"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="City*"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Select Your Tech Interest</option>
                <option>AI & Machine Learning</option>
                <option>Web Development</option>
                <option>Mobile Development</option>
                <option>Cybersecurity</option>
                <option>Robotics</option>
              </select>
              <select className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Accompanied By (Including you)</option>
              </select>
              <motion.button
                type="submit"
                className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg transition-all hover:from-blue-700 hover:to-purple-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                REGISTER NOW
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}