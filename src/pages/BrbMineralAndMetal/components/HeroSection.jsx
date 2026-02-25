import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const heroImg = "/BrbMineralAndMetal/HomePage/hero.webp";

  return (
    <section className="relative w-full h-[83vh] md:h-[97vh] overflow-hidden flex items-center justify-center bg-black">
      
      {/* BACKGROUND IMAGE - Industry Standard Optimization */}
      <img
        src={heroImg}
        alt="Mining Operations Hero"
        loading="eager" 
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Black Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Content Wrapper - Removed min-h-screen to fix responsiveness */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full">

        {/* Logo */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="/BrbMineralAndMetal/HomePage/BRB Minerals logo.png"
            alt="Logo"
            className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 mx-auto object-contain"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="max-w-2xl sm:max-w-3xl md:max-w-4xl text-white mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
            Exploring, Processing, Extracting & Delivering the Metals that Power Tomorrow
          </h1>

          <p className="text-sm sm:text-lg md:text-xl leading-relaxed opacity-90 font-light">
            As a key subsidiary of BRB Group, we specialize in the exploration,
            processing, and supply of essential minerals and metals including
            Copper, Silver, Gold, Lead-Zinc, Antimony, Molybdenum, and Rare Earth
            Elements.
          </p>
        </motion.div>
            {/* Linked Button Section */}
                    <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <a
                      href="/report.pdf" // Agar public folder ke andar direct hai
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer inline-block 
                                 px-6 py-2.5 sm:px-10 sm:py-3 
                                 mt-6 sm:mt-7 
                                 bg-[#03A2A7] text-white font-bold rounded 
                                 transition-all duration-300 
                                 text-xs sm:text-base 
                                 active:scale-95"
                    >
                      View Impact Report 2022-2023
                    </a>
                  </motion.div>
      </div>
    </section>
  );
}