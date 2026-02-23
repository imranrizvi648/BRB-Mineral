import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function WhoWeAreAndMinerals() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  const minerals = [
    {
      name: "Placer Gold",
      desc: "High-purity alluvial gold sourced through efficient placer mining.",
      img: "/brbExploration/Placer Gold product.webp",
      link: "/brb-exploration/placergold",
    },
    {
      name: "Black Sand",
      desc: "Magnetite-rich heavy mineral sands used in industrial and metallurgical applications.",
      img: "/brbExploration/Black sand product.webp",
      link: "/brb-exploration/blacksand",
    },
  ];

  return (
    <section
      className={`${ready ? "enable-anim" : "disable-anim"}  py-10 md:py-10`}
    >

      

      {/* CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="text-center mb-12 md:mt-19">
         

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black md:mb-20 text-black">
            Our <span className="text-[#03A2A7]">Products</span>
          </h2>
           
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {minerals.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative group"
            >
              <div
                className="relative bg-[#111]/70 border border-[#03A2A7]/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* IMAGE */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={m.img}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                {/* CONTENT */}
                <div
                  className="absolute bottom-0 w-full p-5 opacity-100 lg:opacity-0 lg:translate-y-4 lg:max-h-0 
                  lg:group-hover:opacity-100 lg:group-hover:-translate-y-10 lg:group-hover:max-h-44 transition-all duration-500"
                >
                  <h3 className="text-2xl font-bold text-white mb-1 lg:group-hover:text-[#03A2A7] transition-colors duration-300">
                    {m.name}
                  </h3>

                  <p className="text-gray-300 text-sm mt-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500">
                    {m.desc}
                  </p>

                  <Link to={m.link}>
                    <motion.button
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-5 py-2 cursor-pointer bg-[#03A2A7] text-white rounded-full font-semibold text-sm shadow-lg opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500"
                    >
                      Explore More
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
