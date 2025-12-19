import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="w-full py-10 md:py-16 px-6 md:px-14 mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 items-center">
        {/* LEFT — VIDEO + SMALL IMAGE */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Floating small logo */}
          <motion.img
            src="/BRB LOGO PNG black.png"
            alt="small badge"
            className="
              absolute
              left-0 md:left-16 
              top-0 md:-top-6
              w-20 md:w-32 lg:w-36
              bg-white 
              p-2 md:p-3 
              rounded-lg 
              shadow-lg 
              z-20
            "
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Video */}
          <motion.video
            src="/brbExploration/BRB Exploration.mp4"
            className="
              w-full 
              md:h-full
              max-w-md md:max-w-lg lg:max-w-lg 
              rounded-xl 
              shadow-xl 
              object-cover
            "
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* RIGHT — TEXT */}
        <motion.div
          className="md:text-left"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2
            className="
              text-3xl md:text-4xl lg:text-5xl 
              font-extrabold 
              leading-tight 
              mb-4 sm:text-center md:text-left            "
          >
            <span className="text-[#03A2A7]">BRB </span>Exploration
          </h2>

          <p
            className="
              
             text-gray-600 text-base md:text-lg text-center 
              md:mb-6 
              max-w-lg
              md:text-left md:mx-0 md:leading-8
            "
          >
            BRB Exploration is a mineral and mining company focused on unlocking
            the value of natural deposits through innovation, responsibility,
            and long-term sustainability. With advanced geological expertise and
            ethical mining practices, we deliver high-quality mineral products
            to global markets.
          </p>

          <div className="flex md:block justify-start md:justify-center">
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
