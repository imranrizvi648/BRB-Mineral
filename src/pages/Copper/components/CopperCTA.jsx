import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CopperCTA() {
  return (
    
       <section
      className="py-20 relative text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('/leadZinc/3rd banner.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold   mb-6 leading-14">
            Building Pakistan's <span className="text-[#03A2A7]">Copper-Driven Future</span>
          </h2>
          <p className=" text-base sm:text-lg  text-gray-200 mb-8 leading-relaxed">
            BRB Exploration is committed to unlocking Pakistan's copper potential—delivering high-quality, 
            responsibly sourced materials that support national development and international industry.
          </p>
           <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="https://brbgroup.org/cantact-us/"
            className="bg-transparent cursor-pointer text-white px-9 py-3 rounded-full font-bold text-md shadow-2xl border-2 hover:bg-[#028a8e] transition-colors duration-300 inline-block text-center"
          >
            Contact Us Today
          </Link>
        </motion.div>
                <p className="mt-12 text-2xl font-bold text-[#03A2A7]">
            
          </p>
        </motion.div>
      </section>
  );
}
