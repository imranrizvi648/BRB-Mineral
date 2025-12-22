import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductsSection() {
  const minerals = [
    { name: "Lead-Zinc", desc: "Critical base metals for construction, batteries & galvanizing", img: "/BrbMineralAndMetal/HomePage/leadZinc.webp", link:"/brb-mineral-and-metal/leadzinc" },
    { name: "Copper", desc: "For electrical, construction, and industrial applications", img: "/BrbMineralAndMetal/HomePage/copper.webp", link:"/brb-mineral-and-metal/copper" },
    { name: "Silver", desc: "High-purity silver for electronics, refining, and investment", img: "/BrbMineralAndMetal/HomePage/silver.webp", link:"/brb-mineral-and-metal/silver" },
    { name: "Gold", desc: "Consistent-grade gold for industrial and monetary markets", img: "/BrbMineralAndMetal/HomePage/Gold.webp", link:"/brb-mineral-and-metal/gold" },
    { name: "Antimony", desc: "Flame retardants, alloys, military-grade materials", img: "/BrbMineralAndMetal/HomePage/Antinomy.webp", link:"/brb-mineral-and-metal/antimony" },
    { name: "Molybdenum", desc: "Strengthening alloy for steel and industrial applications.", img: "/BrbMineralAndMetal/HomePage/molybdenum.webp", link:"/brb-mineral-and-metal/molybdenum" },
    { name: "Rare Earth Elements (REEs)", desc: "Essential for modern electronics and clean energy", img: "/BrbMineralAndMetal/HomePage/earth.webp", link:"/brb-mineral-and-metal/rare-earth-elements" },
  ];

  return (
    <section className="py-16 md:py-10 relative overflow-hidden bg-[#f7f6f6]">
      <div className="absolute inset-0 " />

      {/* Floating Orbs */}
      <div className="absolute top-16 left-10 w-60 h-60 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-16 right-10 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Our <span className="text-[#03A2A7]">Core Product</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-xl mx-auto mt-4">
            Discover our comprehensive range of high-quality industrial minerals.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="flex flex-wrap justify-center -mx-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {minerals.map((mineral, i) => (
            <div key={i} className="w-full sm:w-1/2 md:w-1/4 px-3 mb-6">
              <ProductCard mineral={mineral} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ mineral }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative block"
    >
      <Link to={mineral.link}>
        <div className="relative h-64 md:h-72 lg:h-72 rounded-2xl overflow-hidden border border-gray-200 hover:border-[#03A2A7]/50 transition-all duration-500">
          
          {/* IMG */}
          <div className="absolute inset-0">
            <img
              src={mineral.img}
              alt={mineral.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
          </div>

          {/* Content */}
          <div
            className="
            absolute bottom-0 w-full p-5 flex flex-col justify-end
            opacity-100 translate-y-0
            lg:opacity-0 lg:translate-y-8
            lg:group-hover:opacity-100 lg:group-hover:-translate-y-8
            transition-all duration-500"
          >
            <h3 className="text-xl font-bold text-white mb-1 lg:group-hover:text-[#03A2A7] transition-colors duration-300">
              {mineral.name}
            </h3>

            <div className="w-14 h-1 bg-gradient-to-r from-[#03A2A7] to-white rounded-full lg:group-hover:w-full transition-all duration-500"></div>

            <p className="text-gray-300 text-sm mt-2 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500">
              {mineral.desc}
            </p>

            <span className="mt-3 block w-full text-center px-4 py-2 bg-[#03A2A7] text-white rounded-full text-sm font-semibold cursor-pointer opacity-0 lg:group-hover:opacity-100 transition-all duration-500">
              Explore More
            </span>
          </div>

          {/* Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-[#03A2A7]/30 backdrop-blur-md border border-[#03A2A7]/40 rounded-full opacity-0 lg:group-hover:opacity-100 transition-all duration-500">
            <span className="text-[#03A2A7] text-xs font-bold">PREMIUM</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
