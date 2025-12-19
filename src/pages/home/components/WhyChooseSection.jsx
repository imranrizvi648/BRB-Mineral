import { useRef } from "react";
import { motion } from "framer-motion";

export default function WhyChooseSectionWithGallery() {

  return (
    <>
      {/* ---------------- MAIN HERO SECTION ---------------- */}
      <section
        className="
          w-full 
          py-20 md:py-28 
          bg-cover bg-center bg-no-repeat 
          relative
        "
        style={{
          backgroundImage:
            "url('/albert-hyseni-Sy_8KuxLwBI-unsplash.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            relative z-10 
            text-center 
            px-6 
            max-w-3xl 
            mx-auto
          "
        >
          <h2
            className="
              text-3xl 
              sm:text-4xl 
              md:text-5xl 
              font-extrabold 
              text-[#03A2A7] 
              mb-4 
              leading-tight
            "
          >
            Why Choose{" "}
            <span className="text-white">BRB Mineraloop?</span>
          </h2>

          <p
            className="
              text-white/90 
              text-base sm:text-lg md:text-xl 
              mb-8 
              leading-relaxed
            "
          >
            Experience the strength of working with trusted industry
            leaders in the mineral sector.
          </p>

          <button
            className="
              bg-[#03A2A7] hover:bg-[#02848a]
              text-white
              px-8 md:px-10 
              py-3 
              rounded-lg
              font-semibold
              transition-all
            "
          >
            Discover More
          </button>
        </motion.div>
      </section>

      

    </>
  );
}
