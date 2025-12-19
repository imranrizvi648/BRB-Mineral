import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full h-[70vh] md:h-[90vh] 
        bg-cover bg-center bg-no-repeat 
        flex flex-col items-center justify-center
      "
      style={{ backgroundImage: "url('/brbExploration/Exploration main page banner.webp')" }}
    >
      {/* Black Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Content Wrapper */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">

        {/* Logo */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="/brbExploration/BRB Minerals logo-6 (2).png"
            alt="Logo"
            className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 mx-auto"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="max-w-xl sm:max-w-2xl md:max-w-3xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
       Advancing the Future of Mineral Discovery
    </h1>

        

          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
            A trusted subsidiary of BRB Group, dedicated to responsible exploration
            and extraction of high-value natural resources including Placer Gold
            and Black Sand minerals.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
