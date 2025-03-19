'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function Sponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const sponsorTiers = [
    {
      tier: "Platinum",
      sponsors: [
        { name: "TechCorp", logo: "/sponsors/sponsor1.png", url: "https://example.com" },
        { name: "InnovateX", logo: "/sponsors/sponsor2.png", url: "https://example.com" },
        { name: "FutureTech", logo: "/sponsors/sponsor3.png", url: "https://example.com" }
      ]
    },
    {
      tier: "Gold",
      sponsors: [
        { name: "DevWorks", logo: "/sponsors/sponsor4.png", url: "https://example.com" },
        { name: "CloudSys", logo: "/sponsors/sponsor5.png", url: "https://example.com" },
        { name: "CodeMasters", logo: "/sponsors/sponsor6.png", url: "https://example.com" },
        { name: "DataFlow", logo: "/sponsors/sponsor7.png", url: "https://example.com" }
      ]
    },
    {
      tier: "Silver",
      sponsors: [
        { name: "AppLabs", logo: "/sponsors/sponsor8.png", url: "https://example.com" },
        { name: "NetSolutions", logo: "/sponsors/sponsor9.png", url: "https://example.com" },
        { name: "TechStart", logo: "/sponsors/sponsor10.png", url: "https://example.com" },
        { name: "WebPro", logo: "/sponsors/sponsor11.png", url: "https://example.com" },
        { name: "AIVentures", logo: "/sponsors/sponsor12.png", url: "https://example.com" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const tierColors = {
    "Platinum": "from-gray-300 to-white",
    "Gold": "from-yellow-300 to-yellow-500",
    "Silver": "from-gray-400 to-gray-500"
  };

  return (
    <section id="sponsors" className="py-24 bg-gradient-to-b from-black via-gray-950/30 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
          className="absolute top-40 right-20 w-96 h-96 bg-gray-500/10 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, 20, 0], 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25,
            ease: "easeInOut" 
          }}
          className="absolute bottom-40 left-20 w-80 h-80 bg-gray-500/10 rounded-full filter blur-3xl"
        />
      </div>
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 inline-block bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 text-transparent bg-clip-text">
            Our Sponsors
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 mx-auto bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Partnering with industry leaders to bring you an unforgettable experience
          </motion.p>
        </motion.div>
        
        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (tierIndex * 0.2), duration: 0.8 }}
                className="flex items-center space-x-4"
              >
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${tierColors[tier.tier as keyof typeof tierColors]} text-transparent bg-clip-text`}>
                  {tier.tier} Sponsors
                </h3>
                <div className={`flex-grow h-0.5 bg-gradient-to-r ${tierColors[tier.tier as keyof typeof tierColors]} opacity-30`}></div>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`grid grid-cols-2 md:grid-cols-${Math.min(tier.sponsors.length, 4)} gap-6`}
              >
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.a
                    key={sponsorIndex}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 p-6 flex items-center justify-center h-32 group"
                  >
                    <div className="relative w-full h-full">
                      <Image 
                        src={sponsor.logo} 
                        alt={sponsor.name}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <a 
            href="/sponsors" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-gray-700 hover:to-gray-900"
          >
            Become a Sponsor
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}