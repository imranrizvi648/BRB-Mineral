import { motion } from "framer-motion";

export default function LegacySection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-14 mt-10 md:mt-20">
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
              left-2 md:left-6 
              top-2 md:-top-6
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
            src="/BRB Brand Story.mp4"
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
              mb-4
            "
          >
            <span className="text-[#03A2A7]">Rooted</span> in BRB Group’s Legacy
          </h2>

          <p
            className="
              text-gray-600 
              text-base md:text-lg 
              mb-6 
              max-w-lg
              text-left md:mx-0
            "
          >
            As a proud sub-parent company of BRB Group, we carry forward a legacy of
            trust, innovation, and excellence. With the Group’s strength behind us,
            we are shaping the future of the mineral industry in Pakistan and beyond.
          </p>

          <div className="flex md:block justify-start md:justify-center">
            <button
              className="
                bg-[#03A2A7] hover:bg-[#02848a]
                text-white
                px-6 md:px-8 
                py-3
                rounded-lg
                font-semibold
                transition-all
                duration-300
              "
            >
              Discover Our Legacy
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
