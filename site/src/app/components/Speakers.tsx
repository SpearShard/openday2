// src/app/components/Speakers.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 relative">
      {/* Background with gradient and noise */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
        <div
          className="absolute inset-0"
          style={{
            background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAA1BMVEW/v7/OT+5LAAAAM0lEQVR4nO3BgQAAAADDoPtTH2kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8G4IAAQeP8pYAAAAASUVORK5CYII=') repeat",
            opacity: 0.05,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4 inline-block bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            Speakers Coming Soon
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
            Stay tuned for our lineup of industry leaders and innovators!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}