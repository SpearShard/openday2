// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiUsers, FiCode, FiAward, FiTarget, FiTrendingUp, FiHeart, FiCalendar, FiMapPin, FiCpu, FiGlobe, FiZap } from 'react-icons/fi';

// export default function About() {
//   const stats = [
//     { number: '2000+', label: 'Tech Enthusiasts', icon: FiUsers },
//     { number: '100+', label: 'Tech Workshops', icon: FiCode },
//     { number: '50+', label: 'Tech Companies', icon: FiGlobe },
//     { number: '24hr', label: 'Hackathon', icon: FiZap },
//   ];

//   const features = [
//     {
//       title: 'Tech Showcase',
//       description: 'Experience cutting-edge technology demonstrations, robotics, AI projects, and innovative student solutions.',
//       icon: FiCpu,
//     },
//     {
//       title: 'Hackathon',
//       description: 'Participate in our 24-hour hackathon to build innovative solutions and compete for exciting prizes.',
//       icon: FiCode,
//     },
//     {
//       title: 'Tech Talks',
//       description: 'Listen to industry experts share insights on emerging technologies and future tech trends.',
//       icon: FiTrendingUp,
//     },
//     {
//       title: 'Tech Career Fair',
//       description: 'Connect with leading tech companies and explore internship and career opportunities.',
//       icon: FiTarget,
//     },
//   ];

//   return (
//     <div className="relative py-20 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
//       <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
//       <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
//       <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

//       <div className="relative container mx-auto px-6">
//         {/* Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
//             CIT Tech Fest 2025
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Join us for an extraordinary celebration of technology, innovation, and creativity.
//             Experience the future of tech firsthand.
//           </p>
//         </motion.div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Left Column - Content */}
//           <div>
//             {/* Statistics */}
//             <div className="grid grid-cols-2 gap-6 mb-12">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
//                 >
//                   <stat.icon className="w-8 h-8 text-blue-600 mb-3" />
//                   <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
//                   <div className="text-sm text-gray-600">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Features */}
//             <div className="space-y-6">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
//                 >
//                   <feature.icon className="w-8 h-8 text-blue-600 mb-3" />
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Event Details */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
//             >
//               <div className="flex items-center mb-4">
//                 <FiCalendar className="w-6 h-6 text-blue-600 mr-3" />
//                 <span className="text-gray-800 font-medium">April 15-16, 2025</span>
//               </div>
//               <div className="flex items-center">
//                 <FiMapPin className="w-6 h-6 text-blue-600 mr-3" />
//                 <span className="text-gray-800 font-medium">CIT Main Campus, Cambridge</span>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Column - Registration Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Register for Tech Fest</h3>
//             <form className="space-y-4">
//               <select className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                 <option>Individual Registration</option>
//                 <option>Group Registration (Hackathon)</option>
//               </select>
//               <input
//                 type="text"
//                 placeholder="Name*"
//                 className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//               <input
//                 type="email"
//                 placeholder="Email*"
//                 className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//               <div className="flex gap-2">
//                 <select className="w-1/3 p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                   <option>+91</option>
//                 </select>
//                 <input
//                   type="text"
//                   placeholder="Phone Number"
//                   className="w-2/3 p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Select State"
//                 className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//               <input
//                 type="text"
//                 placeholder="City*"
//                 className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//               <select className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                 <option>Select Your Tech Interest</option>
//                 <option>AI & Machine Learning</option>
//                 <option>Web Development</option>
//                 <option>Mobile Development</option>
//                 <option>Cybersecurity</option>
//                 <option>Robotics</option>
//               </select>
//               <select className="w-full p-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                 <option>Accompanied By (Including you)</option>
//               </select>
//               <motion.button
//                 type="submit"
//                 className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg transition-all hover:from-blue-700 hover:to-purple-700"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 REGISTER NOW
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiBook, FiAward, FiTarget, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function About() {
  const features = [
    {
      icon: FiUsers,
      title: 'Community First',
      description: 'Join a vibrant community of learners, innovators, and future leaders.'
    },
    {
      icon: FiBook,
      title: 'Excellence in Education',
      description: 'Experience world-class education with cutting-edge curriculum and facilities.'
    },
    {
      icon: FiAward,
      title: 'Industry Ready',
      description: 'Graduate with skills that matter in today\'s competitive job market.'
    },
    {
      icon: FiTarget,
      title: 'Future Focused',
      description: 'Prepare for tomorrow\'s challenges with forward-thinking programs.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-yellow-400 to-yellow-500 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            About CIT Open Day
          </h1>
          <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto">
            Experience the future of education at Cambridge Institute of Technology's Open Day 2025
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
              <p className="text-black/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* About Content and Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Why Choose CIT?
            </h2>
            <p className="text-lg text-black/80">
              Cambridge Institute of Technology (CIT) is a premier institution dedicated to excellence in engineering and technology education. Our Open Day 2025 offers you a unique opportunity to:
            </p>
            <ul className="space-y-4">
              {[
                'Explore state-of-the-art facilities and laboratories',
                'Meet experienced faculty members and industry experts',
                'Interact with current students and alumni',
                'Learn about our innovative programs and research opportunities',
                'Experience our vibrant campus culture'
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-black/80"
                >
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8"
            >
              <div className="flex items-center mb-4">
                <FiCalendar className="w-6 h-6 text-black mr-3" />
                <span className="text-black font-medium">April 19, 2025</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="w-6 h-6 text-black mr-3" />
                <span className="text-black font-medium">CIT Campus, Bengaluru</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-black mb-6">Register for Open Day</h3>
            <form className="space-y-4">
              <select className="w-full p-3 border border-black/20 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-black/20 focus:border-transparent text-black">
                <option>Individual Registration</option>
                <option>Group Registration</option>
              </select>
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-3 border border-black/20 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-black/20 focus:border-transparent text-black placeholder-black/50"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 border border-black/20 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-black/20 focus:border-transparent text-black placeholder-black/50"
              />
              <div className="flex gap-2">
                <select className="w-1/3 p-3 border border-black/20 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-black/20 focus:border-transparent text-black">
                  <option>+91</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-2/3 p-3 border border-black/20 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-black/20 focus:border-transparent text-black placeholder-black/50"
                />
              </div>
              <input
                type="text"
                placeholder="Select State"
                className="w-full p-3 border border-black/20 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-black/20 focus:border-transparent text-black placeholder-black/50"
              />
              <input
                type="text"
                placeholder="City*"
                className="w-full p-3 border border-black/20 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-black/20 focus:border-transparent text-black placeholder-black/50"
              />
              <select className="w-full p-3 border border-black/20 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-black/20 focus:border-transparent text-black">
                <option>Select Your Interest</option>
                <option>Engineering Programs</option>
                <option>Technology Programs</option>
                <option>Research Opportunities</option>
                <option>Campus Life</option>
              </select>
              <select className="w-full p-3 border border-black/20 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-black/20 focus:border-transparent text-black">
                <option>Accompanied By (Including you)</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <motion.button
                type="submit"
                className="w-full py-4 rounded-lg bg-black text-white font-bold text-lg shadow-lg transition-all hover:bg-black/90"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                REGISTER NOW
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


