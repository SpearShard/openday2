// src/app/components/Venue.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Venue() {
  return (
    <section id="venue" className="min-h-screen bg-yellow-400 text-black flex flex-col items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6">Venue</h2>
        <p className="text-lg md:text-xl font-medium mb-8">
          Join us at the Cambridge Institute of Technology campus in Bengaluru!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="relative w-full md:w-1/2 h-64">
            <Image
              src="/venue-image.jpg" // Replace with your actual image path
              alt="CIT Venue"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg font-medium">
              <strong>Location:</strong> Cambridge Institute of Technology, <br />
              Krishnarajapuram, Bengaluru - 560036
            </p>
            <p className="mt-4 text-lg font-medium">
              <strong>Date:</strong> 19 April 2025 <br />
              <strong>Time:</strong> 10 AM - 5 PM
            </p>
          </div>
        </div>
        <motion.button
          className="mt-8 px-8 py-4 rounded-full bg-black text-yellow-400 text-xl font-bold hover:bg-gray-800 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Directions
        </motion.button>
      </motion.div>
    </section>
  );
}