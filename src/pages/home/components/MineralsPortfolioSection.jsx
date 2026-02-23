import { motion } from "framer-motion";
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
    <section className="py-10 md:py-10 relative overflow-hidden">
      <style>{`
        @keyframes borderRotate {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }

        .animated-border {
          position: relative;
        }

        .animated-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            transparent,
            #03A2A7,
            #00CED1,
            #03A2A7,
            transparent,
            transparent
          );
          background-size: 200% 100%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: borderRotate 3s linear infinite;
          pointer-events: none;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 text-center relative z-10"
      >

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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
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
                className="relative rounded-2xl overflow-hidden 
                  bg-[#111]/70 shadow-xl animated-border
                  hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover 
                      transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
            
                </div>

                {/* Content */}
                <div
                  className="
                  absolute bottom-0 w-full p-4
                  opacity-100 translate-y-0 max-h-full
                  lg:opacity-0 lg:translate-y-4 lg:max-h-0
                  lg:group-hover:opacity-100 lg:group-hover:-translate-y-8 lg:group-hover:max-h-40
                  transition-all duration-500 group-hover:bg-black/50 rounded-4xl"
                >
                  <h3 className="text-lg sm:text-xl md:text-[21px] text-center  font-bold text-white mb-1 lg:group-hover:text-white transition-colors duration-300">
                    {m.name}
                  </h3>

                  <div className="w-12 h-1 bg-gradient-to-r from-[#03A2A7] to-white rounded-full lg:group-hover:w-full transition-all duration-500" />

                  <p
                    className="
                    text-gray-100 text-sm mt-2 text-center lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500"
                  >
                    {m.desc}
                  </p>

                  <Link to={m.link}>
                    <motion.button
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-3 px-4 py-2 items-center text-center bg-[#03A2A7] text-white rounded-full font-semibold text-sm shadow-lg opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500"
                    >
                      Explore More
                    </motion.button>
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}