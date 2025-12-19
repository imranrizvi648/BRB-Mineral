import { motion } from "framer-motion";

export default function ExpertiseSection() {
const expertiseData = [
  { 
    icon: "/BrbMineralAndMetal/icons/Exploration Expertise.webp", 
    title: "Exploration Expertise", 
    desc: "Geophysical surveys, sampling programs, geological mapping, and resource evaluation using modern technology to identify high-value deposits." 
  },
  { 
    icon: "/BrbMineralAndMetal/icons/Extraction & Processing.webp", 
    title: "Extraction & Processing", 
    desc: "Mining operations following international safety and environmental standards with best-in-class extraction methods." 
  },
  { 
    icon: "/BrbMineralAndMetal/icons/Quality Control.webp", 
    title: "Quality Control", 
    desc: "Every mineral product undergoes rigorous testing for purity, grade consistency, and compliance with global market standards." 
  },
  { 
    icon: "/BrbMineralAndMetal/icons/Logistics & Supply.webp", 
    title: "Logistics & Supply", 
    desc: "Efficient shipping, warehousing, and distribution network to deliver metals to customers worldwide." 
  },
];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 relative inline-block left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Our <span className="text-[#03A2A7]">Expertise</span>
      
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-700 text-base md:text-lg max-w-3xl mx-auto mt-3 md:mt-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          BRB Minerals and Metals is at the forefront of responsible mining and metal extraction. With advanced geological capabilities and a commitment to sustainability, we provide essential raw materials that support global industries.
        </motion.p>

        {/* Expertise Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.12,
                delayChildren: 0.1
              } 
            }
          }}
        >
          {expertiseData.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#03A2A7] transition-colors duration-300 cursor-pointer group"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
            >
            <motion.div 
  className="mb-6 flex justify-center"
  whileHover={{ 
    scale: 1.15, 
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.5 }
  }}
>
  <img 
    src={item.icon}
    alt={item.title}
    className="w-25 h-25 -mt-4 object-contain" 
  />
</motion.div>

              <h3 className="text-xl font-bold text-[#03A2A7] mb-3 -mt-3 group-hover:text-[#028a8e] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}