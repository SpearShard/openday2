'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white shadow-2xl'
        : 'bg-white'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Brand Section */}
          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <div className="relative w-[200px] h-[60px] group">
                <Image
                  src="/manipal.png"
                  alt="Manipal Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-300"
                  priority
                />
              </div>
              <div className="h-8 w-px bg-gray-300" /> {/* Vertical Divider */}
              <div className="relative w-[50px] h-[50px] group">
                <Image
                  src="/citlogo.png"
                  alt="CIT Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Register Now</span>
              <FiChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-300 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              <MobileNavLinks toggleMenu={toggleMenu} />
              <div className="pt-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Register Now</span>
                  <FiChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLinks = () => {
  const links = [
    { href: '/about', label: 'About' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/venue', label: 'Venue' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </>
  );
};

const MobileNavLinks = ({ toggleMenu }: { toggleMenu: () => void }) => {
  const links = [
    { href: '/about', label: 'About' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/venue', label: 'Venue' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="space-y-2">
      {links.map((link, index) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <MobileNavLink href={link.href} onClick={toggleMenu}>
            {link.label}
          </MobileNavLink>
        </motion.div>
      ))}
    </div>
  );
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative">
      <span className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300">
        {children}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-3 px-4 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 rounded-lg hover:bg-gray-50"
    >
      {children}
    </Link>
  );
}

export default Navbar;
