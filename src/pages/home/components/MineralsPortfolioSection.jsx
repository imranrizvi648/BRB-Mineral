import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function MineralsPortfolioSection() {
  const minerals = [
    {
      name: "Fluorite",
      desc: "A hidden treasure with global potential – rich deposits in Balochistan and Khyber Pakhtunkhwa.",
      img: "/portfolioImage/Flourite.webp",
      link: "/mineral/flourite"
    },
    {
      name: "Phosphate",
      desc: "Fueling agriculture and economic growth – essential for food security and fertilizer production.",
      img: "/portfolioImage/phosphate.webp",
      link: "/mineral/phosphate"
    },
    
    {
      name: "Iron Ore",
      desc: "Powering industry and infrastructure – backbone of industrial development and steel production.",
      img: "/portfolioImage/iron-ore.webp",
      link: "/mineral/iron"
    },
    {
      name: "Barite ",
      desc: "A strategic industrial mineral with extensive applications across global industries.",
      img: "/portfolioImage/barite.webp",
      link: "/mineral/barite"
    },
    {
      name: "Bauxite",
      desc: "The primary source of aluminum - strategically important for Pakistan's industrial growth.",
      img: "/portfolioImage/bauxide.webp",
      link: "/mineral/bauxite"
    },
    {
      name: "Talc (Soapstone)",
      desc: "World-class industrial mineral with exceptional purity and asbestos-free properties.",
      img: "/portfolioImage/talc-img.webp",
      link: "/mineral/talc"
    },
  ];

  return (
    <section className="py-10 pt-5 md:py-10 relative overflow-hidden">
      
      {/* Parent Container Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 text-center relative z-10"
      >

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
         

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            <span className="text-[#03A2A7]">Our <span className="text-black">Minerals</span></span>
            <br />
            Portfolio
          </h2>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-xl mx-auto -mt-4 leading-relaxed">
            Discover our comprehensive range of high-quality industrial minerals.
          </p>
        </motion.div>

        {/* Mineral Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {minerals.map((m, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative group"
            >
              {/* CARD */}
              <div
                className="relative rounded-3xl overflow-hidden 
                bg-[#111]/70 border border-[#03A2A7]/30 shadow-xl
                hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover 
                      transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03A2A7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div
                  className="
                  absolute bottom-0 w-full p-5
                  opacity-100 translate-y-0 max-h-full
                  lg:opacity-0 lg:translate-y-4 lg:max-h-0
                  lg:group-hover:opacity-100 lg:group-hover:-translate-y-10 lg:group-hover:max-h-45
                  transition-all duration-500"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 lg:group-hover:text-[#03A2A7] transition-colors duration-300">
                    {m.name}
                  </h3>

                  <div className="w-14 h-1 bg-gradient-to-r from-[#03A2A7] to-white rounded-full lg:group-hover:w-full transition-all duration-500" />

                  <p
                    className="
                    text-gray-300 text-sm sm:text-base leading-relaxed 
                    opacity-100 max-h-full
                    lg:opacity-0 lg:max-h-0  
                    lg:group-hover:max-h-40 lg:group-hover:opacity-100
                    transition-all duration-500 overflow-hidden mt-2"
                  >
                    {m.desc}
                  </p>

                  <Link to={m.link}>
                    <motion.button
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-5 py-2 bg-[#03A2A7] text-white rounded-full font-semibold text-sm shadow-lg opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500"
                    >
                      Explore More
                    </motion.button>
                  </Link>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#03A2A7]/30 backdrop-blur-md border border-[#03A2A7]/40 rounded-full opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[#03A2A7] text-xs font-bold">
                    PREMIUM
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Final Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80hv] mt-28 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/portfolioImage/miguel-bruna-qKlUdr1qOR8-unsplash.jpg")' }}
        />

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#03A2A7]/20 to-black/80"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight mb-4"
          >
            <span className="text-[#03A2A7]">From the Earth</span>
            <br />
            to the Heights of Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed"
          >
            Delivering world-class quality rooted in innovation and integrity.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-7 py-3 bg-[#03A2A7] text-white rounded-full font-bold text-sm sm:text-base shadow-xl hover:opacity-90"
          >
            Discover Our Journey
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
