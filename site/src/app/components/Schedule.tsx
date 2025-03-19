'use client';

import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function EventSchedule() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const blockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeInOut',
      },
    }),
  };

  const schedule = [
    {
      time: '10:00 AM - 1:00 PM',
      title: 'REGISTRATIONS OPEN',
      activities: [
        { name: 'Tech Off', icon: '⚙️' },
        { name: 'Domino', icon: '🎲' },
        { name: 'BizWhiz', icon: '💡' },
        { name: 'Eureka', icon: '🔬' },
        { name: 'Policy Forge', icon: '📜' },
      ],
    },
    {
      time: '1:00 PM - 2:00 PM',
      title: 'FOOD & FUN',
      activities: [
        { name: 'Flash Mob', icon: '💃' },
        { name: 'The Big Gig', icon: '🎤' },
        { name: 'Food Path', icon: '🍔' },
      ],
    },
    {
      time: '2:00 PM - 3:00 PM',
      title: 'CONNECT SESSION',
      location: 'Dr. Ramdas M Pai Convention Centre',
      activities: [],
    },
    {
      time: '3:45 PM - 4:30 PM',
      title: 'COMEDY CIRCUIT',
      location: 'Sir MV Block',
      activities: [{ name: 'Standup Comedy by Me', icon: '😂' }],
    },
  ];

  return (
    <section id="schedule" className="py-20 md:py-28 bg-black text-yellow-400 px-6 md:px-12 lg:px-24">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-tight">
            Event Schedule
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '10rem' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 mx-auto bg-yellow-400 mt-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed text-gray-200"
          >
            A day packed with **innovation, fun, and connections** at **CIT Open Day 2025**.
          </motion.p>
        </motion.div>

        {/* Schedule Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {schedule.map((event, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={blockVariants}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 20px rgba(255,255,255,0.3)' }}
              className="p-6 md:p-8 rounded-lg bg-yellow-400 text-black border-4 border-black shadow-xl flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold uppercase mb-3 tracking-wide">{event.time}</h3>
                <h4 className="text-2xl md:text-3xl font-extrabold uppercase mb-4">{event.title}</h4>
                {event.location && (
                  <p className="text-md md:text-lg font-medium italic mb-4 text-gray-800">{event.location}</p>
                )}
                {event.activities.length > 0 && (
                  <ul className="space-y-2">
                    {event.activities.map((activity, i) => (
                      <li key={i} className="flex items-center text-md md:text-lg font-semibold">
                        <span className="mr-3 text-xl md:text-2xl">{activity.icon}</span>
                        {activity.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
