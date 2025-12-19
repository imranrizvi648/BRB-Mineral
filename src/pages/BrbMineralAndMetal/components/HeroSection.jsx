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
      style={{ backgroundImage: "url('/brbmineralandexploration/hero.webp')" }}
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
      src="/brbmineralandexploration/BRB Minerals logo-7 (3).png"
      alt="Logo"
      className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 mx-auto"
    />
  </motion.div>

  {/* Text Content */}
  <motion.div
    className="max-w-2xl sm:max-w-3xl md:max-w-4xl text-white"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
      Exploring, Extracting & Delivering the Metals that Power Tomorrow
    </h1>

    <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
      As a key subsidiary of BRB Group, we specialize in the exploration,
      processing, and supply of essential minerals and metals including
      Copper, Silver, Gold, Lead-Zinc, Antimony, Molybdenum, and Rare Earth
      Elements.
    </p>
  </motion.div>

</div>

    </section>
  );
}
