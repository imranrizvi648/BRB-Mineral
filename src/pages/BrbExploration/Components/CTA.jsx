import React from 'react';
import { motion } from 'framer-motion';

const CTA = ({ bgImage = "/brbExploration/cta.webp" }) => {
  return (
    // 'hv' ko 'vh' kiya aur flexbox use kiya taake content center rahe
    <section className="w-full h-[50vh] min-h-[400px] relative overflow-hidden flex items-center justify-center">
      
      {/* Background Image Container */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
        style={{ 
          backgroundImage: `url('${bgImage}')`,
          zIndex: 0
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 backdrop-blur-[1px] z-10" />

      {/* Content Container - Padding kam kardi height fit karne ke liye */}
      <div className="relative z-20 text-center px-4 w-full">
        
        {/* Title */}
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl  font-bold mb-4 text-white tracking-tighter"
        >
          Part of <span className="text-[#03A2A7]"> BRB Group</span>
        </motion.h3>

        {/* Description - Text thora chota kiya taake height mein fit aaye */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-200 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed mb-8 font-light px-4"
        >
          As a trusted subsidiary of BRB Group, we benefit from strong corporate governance, 
          financial stability, and long-term success across all sectors.
        </motion.p>

      </div>
    </section>
  );
};

export default CTA;