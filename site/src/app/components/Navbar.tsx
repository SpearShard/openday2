'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Schedule', href: '#' },
    { name: 'Speakers', href: '#' },
    { name: 'Register', href: '#' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full px-8 py-4 flex items-center justify-between bg-white/10 backdrop-blur-md shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Logo + Intuit Branding */}
      <motion.div className="flex items-center space-x-4 cursor-pointer">
        {/* Demo Logo Placeholder */}
        <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg">
          <Image
            src="/logo-demo.png" // Replace with your actual logo path
            alt="Logo"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
            className="object-contain"
          />
        </div>

        <motion.span
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.1 }}
        >
          INTUIT 🚀
        </motion.span>
      </motion.div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            className="text-white text-lg font-medium transition-all duration-300 hover:text-orange-400"
            whileHover={{ scale: 1.1 }}
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl"
          whileTap={{ scale: 0.8 }}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center justify-center space-y-8 text-white text-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="transition-all duration-300 hover:text-orange-400"
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
