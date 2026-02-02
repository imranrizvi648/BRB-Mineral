import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden flex items-center justify-center bg-black"
    >
      {/* BACKGROUND IMAGE - Isay priority di hai taake sabse pehle ye load ho */}
      <img
        src="heroimage.webp"
        alt="Hero Background"
        loading="eager" // Browser ko foran load karne ka order
        fetchpriority="high" // Isay sabse zyada priority dena
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Black Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Hero Content Wrapper - Responsive fixed (removed min-h-screen) */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">

        {/* Logo */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="/Companies Logo FINAL-15 (1).png"
            alt="Logo"
            className="w-28 sm:w-36 md:w-48 lg:w-56 xl:w-64 mx-auto"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="max-w-2xl md:max-w-3xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Premium Industrial Minerals
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
            Leading the global minerals trade with sustainable practices and
            innovative solutions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}