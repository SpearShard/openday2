'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import { useState } from 'react';

export default function Footer() {
  const [isCookieVisible, setIsCookieVisible] = useState(true);

  return (
    <footer className="min-h-screen snap-start bg-yellow-400 text-black font-sans flex flex-col justify-between relative">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center flex-grow flex flex-col justify-center">
        {/* Title & Description */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Who We Are
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl font-medium max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Cambridge Institute of Technology (CITech), Bengaluru, is a dynamic and innovative hub of education, fostering excellence in engineering and technology.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-6 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="https://linkedin.com" className="text-black text-3xl hover:opacity-70 transition" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
          <Link href="https://twitter.com" className="text-black text-3xl hover:opacity-70 transition" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </Link>
          <Link href="https://instagram.com" className="text-black text-3xl hover:opacity-70 transition" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
          <Link href="https://facebook.com" className="text-black text-3xl hover:opacity-70 transition" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
        </motion.div>

        {/* Address */}
        <motion.p
          className="mt-6 text-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Cambridge Institute of Technology, Krishnarajapuram, Bengaluru - 560036 <br />
          Tel: +91 80 24494141 / 24494107 / 7411747070
        </motion.p>

        {/* Copyright */}
        <motion.div
          className="mt-8 text-black text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            © CIT OPEN DAY |{' '}
            <Link href="/privacy" className="underline hover:text-gray-700">
              Privacy & Policy
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Cookie Consent Bar */}
      {isCookieVisible && (
        <motion.div
          className="fixed bottom-0 left-0 w-full bg-black/90 text-yellow-400 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm z-50 shadow-lg"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center md:text-left mb-2 md:mb-0">
            We use cookies to enhance your browsing experience and analyze traffic. By clicking "Accept," you consent to the use of cookies.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsCookieVisible(false)}
              className="border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition font-medium"
            >
              Accept
            </button>
            <button
              onClick={() => setIsCookieVisible(false)}
              className="border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition font-medium"
            >
              Reject
            </button>
          </div>
        </motion.div>
      )}
    </footer>
  );
}