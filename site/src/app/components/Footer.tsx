// 'use client';

// import { motion } from 'framer-motion';
// import Link from "next/link";
// import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
// import { useState } from 'react';

// export default function Footer() {
//   const [isCookieVisible, setIsCookieVisible] = useState(true);

//   return (
//     <footer className="min-h-screen snap-start bg-yellow-400 text-black font-sans flex flex-col justify-between relative">
//       {/* Main Footer Content */}
//       <div className="max-w-6xl mx-auto px-6 py-12 text-center flex-grow flex flex-col justify-center">
//         {/* Title & Description */}
//         <motion.h2
//           className="text-4xl md:text-5xl font-extrabold uppercase"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Who We Are
//         </motion.h2>
//         <motion.p
//           className="mt-4 text-lg md:text-xl font-medium max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           Cambridge Institute of Technology (CITech), Bengaluru, is a dynamic and innovative hub of education, fostering excellence in engineering and technology.
//         </motion.p>

//         {/* Social Icons */}
//         <motion.div
//           className="flex justify-center space-x-6 mt-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <Link href="https://linkedin.com" className="text-black text-3xl hover:opacity-70 transition" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin />
//           </Link>
//           <Link href="https://twitter.com" className="text-black text-3xl hover:opacity-70 transition" target="_blank" rel="noopener noreferrer">
//             <FaXTwitter />
//           </Link>
//           <Link href="https://instagram.com" className="text-black text-3xl hover:opacity-70 transition" target="_blank" rel="noopener noreferrer">
//             <FaInstagram />
//           </Link>
//           <Link href="https://facebook.com" className="text-black text-3xl hover:opacity-70 transition" target="_blank" rel="noopener noreferrer">
//             <FaFacebook />
//           </Link>
//         </motion.div>

//         {/* Address */}
//         <motion.p
//           className="mt-6 text-lg font-medium"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Cambridge Institute of Technology, Krishnarajapuram, Bengaluru - 560036 <br />
//           Tel: +91 80 24494141 / 24494107 / 7411747070
//         </motion.p>

//         {/* Copyright */}
//         <motion.div
//           className="mt-8 text-black text-sm"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <p>
//             © CIT OPEN DAY |{' '}
//             <Link href="/privacy" className="underline hover:text-gray-700">
//               Privacy & Policy
//             </Link>
//           </p>
//         </motion.div>
//       </div>

//       {/* Cookie Consent Bar */}
//       {/* {isCookieVisible && (
//         <motion.div
//           className="fixed bottom-0 left-0 w-full bg-black/90 text-yellow-400 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm z-50 shadow-lg"
//           initial={{ y: 100 }}
//           animate={{ y: 0 }}
//           exit={{ y: 100 }}
//           transition={{ duration: 0.5 }}
//         > */}
//       {/* <p className="text-center md:text-left mb-2 md:mb-0">
//             We use cookies to enhance your browsing experience and analyze traffic. By clicking "Accept," you consent to the use of cookies.
//           </p> */}
//       {/* <div className="flex space-x-4">
//             <button
//               onClick={() => setIsCookieVisible(false)}
//               className="border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition font-medium"
//             >
//               Accept
//             </button>
//             <button
//               onClick={() => setIsCookieVisible(false)}
//               className="border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition font-medium"
//             >
//               Reject
//             </button>
//           </div> */}
//       {/* </motion.div> */}
//       {/* )} */}
//     </footer>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative min-h-screen bg-gradient-to-b from-yellow-400 to-yellow-500 text-black overflow-hidden flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 relative inline-block">
                About CIT
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-black rounded-full"></span>
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Cambridge Institute of Technology (CITech), Bengaluru, is a dynamic and innovative hub of education, fostering excellence in engineering and technology.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-black rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Programs', 'Contact'].map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href={`/${link.toLowerCase().replace(' ', '-')}`}
                      className="group flex items-center text-gray-800 hover:text-black transition-colors"
                    >
                      <span className="w-1 h-1 bg-black rounded-full mr-2 group-hover:w-2 transition-all"></span>
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-black rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <FaLocationDot className="text-xl mt-1" />
                  <span className="text-gray-800">Krishnarajapuram, Bengaluru - 560036</span>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <FaPhone className="text-xl mt-1" />
                  <span className="text-gray-800">+91 80 24494141 / 24494107</span>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <FaEnvelope className="text-xl mt-1" />
                  <span className="text-gray-800">info@citech.edu.in</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 relative inline-block">
                Follow Us
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-black rounded-full"></span>
              </h3>
              <div className="flex space-x-6">
                {[
                  { icon: FaLinkedin, href: 'https://linkedin.com' },
                  { icon: FaXTwitter, href: 'https://twitter.com' },
                  { icon: FaInstagram, href: 'https://instagram.com' },
                  { icon: FaFacebook, href: 'https://facebook.com' }
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={social.href}
                      className="group relative"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center transition-all group-hover:bg-black/20">
                        <social.icon className="text-2xl text-black" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.icon.name.replace('Fa', '')}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="relative py-6 border-t border-black/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-800 text-sm">
              © {new Date().getFullYear()} Cambridge Institute of Technology. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link, index) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-800 hover:text-black transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}