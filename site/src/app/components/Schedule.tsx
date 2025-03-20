'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Schedule() {
  const scheduleBlocks = [
    {
      time: '10:00 AM TO 1:00 PM',
      title: 'REGISTRATIONS OPEN',
      activities: [
        { name: 'TECH OFF', description: 'TECHNICAL PROJECT EXHIBITION & STUDENT CLUB ACTIVITIES' },
        { name: 'DOMINO', description: 'GAMING' },
        { name: 'BIZWHIZ', description: 'BUSINESS QUIZ' },
        { name: 'EUREKA', description: 'SCIENCE QUIZ' },
        { name: 'POLICY FORGE', description: 'SCIENCE QUIZ' }
      ],
      color: 'bg-pink-500'
    },
    {
      time: '1:00 PM TO 2:00 PM',
      title: 'FOOD AND FUN',
      activities: [
        { name: 'FLASH MOB', description: 'STUDENT DANCE' },
        { name: 'THE BIG GIG', description: 'STUDENT BAND' },
        { name: 'FOOD PATH', description: 'CAMPUS FOOD STALLS' }
      ],
      color: 'bg-yellow-400'
    },
    {
      time: '2:00 PM TO 3:30 PM',
      title: 'CONNECT',
      location: '(Dr. Ramdas M Pai Convention Centre)',
      activities: [],
      color: 'bg-yellow-400'
    },
    {
      time: '3:45 PM TO 4:30 PM',
      title: 'COMEDY CIRCUIT',
      location: '(Dr. Ramdas M Pai Convention Centre)',
      activities: [
        { name: 'STAND UP COMEDY', description: 'BY ABHISHEK UPMANYU' }
      ],
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-lime-400 py-16 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="inline-block text-4xl font-black bg-pink-500 text-black px-8 py-2 transform -rotate-2">
          EVENT SCHEDULE
        </h2>
      </motion.div>

      {/* Schedule Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {scheduleBlocks.map((block, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`${block.color} p-6 rounded-lg shadow-lg transform hover:scale-102 transition-transform duration-200 border-4 border-black`}
          >
            {/* Time */}
            <div className="text-2xl font-black text-black mb-4">
              {block.time}
            </div>

            {/* Title */}
            <div className="text-3xl font-black text-black mb-4">
              {block.title}
            </div>

            {/* Location if exists */}
            {block.location && (
              <div className="text-lg font-medium text-black mb-4 italic">
                {block.location}
              </div>
            )}

            {/* Activities */}
            {block.activities.length > 0 && (
              <div className="space-y-4">
                {block.activities.map((activity, idx) => (
                  <div key={idx} className="border-t-2 border-black pt-3">
                    <div className="text-xl font-bold text-black">
                      {activity.name}
                    </div>
                    <div className="text-sm font-medium text-black">
                      {activity.description}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
