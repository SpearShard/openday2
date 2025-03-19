"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold gradient-text">
              TECH FEST 2024
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="#about" className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="#events" className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Events
              </Link>
              <Link href="#schedule" className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Schedule
              </Link>
              <Link href="/register" className="btn-primary">
                Register Now
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-md">
            <Link href="/" className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="#events" className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Events
            </Link>
            <Link href="#schedule" className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Schedule
            </Link>
            <Link href="/register" className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}