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
                className="relative rounded-2xl overflow-hidden 
                  bg-[#111]/70 shadow-xl animated-border
                  hover:shadow-2xl transition-all duration-500"
              >
                {/* IMAGE */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={m.img}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/50  transition-colors duration-500" />
                </div>

               {/* CONTENT */}
<div
  className=" absolute bottom-0 w-full p-5 
    flex flex-col items-center justify-end  {/* Yahan items-center add kiya */}
    opacity-100 translate-y-0
    lg:opacity-0 lg:translate-y-8
    lg:group-hover:opacity-100 lg:group-hover:-translate-y-8 rounded-4xl group-hover:bg-black/50
    transition-all duration-500 "
>
  <h3 className="text-lg sm:text-xl md:text-[21px] text-center text-white mb-1 font-bold transition-all duration-500 delay-75">
    {m.name}
  </h3>
  
  <div className="w-12 h-1 bg-gradient-to-r from-[#03A2A7] to-white rounded-full lg:group-hover:w-3/4 transition-all duration-700 delay-100 mb-2" />

  <p className="text-gray-100 text-sm text-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 delay-150 leading-relaxed">
    {m.desc}
  </p>

  {/* Button Wrapper */}
  <Link to={m.link} className="w-full flex justify-center">
    <motion.button
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      className="mt-4 px-6 py-2 bg-[#03A2A7] text-white rounded-full font-semibold text-sm shadow-lg 
                 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 delay-200"
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
