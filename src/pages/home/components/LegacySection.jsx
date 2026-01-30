import { motion } from "framer-motion";

export default function LegacySection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-14 mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">

        {/* LEFT — VIDEO WRAPPER */}
        <motion.div
          className="relative flex justify-center md:justify-start" // Left align on desktop
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Container for Video + Logo to keep them together */}
          <div className="relative w-full max-w-md md:max-w-lg">
            
            {/* Floating small logo - Ab ye hamesha video ke kone par rahega */}
            <motion.img
              src="/BRB LOGO PNG black.png"
              alt="small badge"
              className="
                absolute 
                -left-4 md:-left-8   /* Adjust horizontal position */
                -top-4 md:-top-10    /* Adjust vertical position */
                w-24 md:w-32 lg:w-40
                bg-white 
                p-2 md:p-3 
                rounded-lg 
                shadow-2xl 
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
                aspect-video /* Maintains consistent shape */
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
          </div>
        </motion.div>

        {/* RIGHT — TEXT */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            <span className="text-[#03A2A7]">Rooted</span> in BRB Group’s Legacy
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-lg">
            As a proud sub-parent company of BRB Group, we carry forward a legacy of
            trust, innovation, and excellence. With the Group’s strength behind us,
            we are shaping the future of the mineral industry in Pakistan and beyond.
          </p>

          <a href="https://brbgroup.org/who-we-are/">
            <button className="bg-[#03A2A7] hover:bg-[#02848a] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
              Discover Our Legacy
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}