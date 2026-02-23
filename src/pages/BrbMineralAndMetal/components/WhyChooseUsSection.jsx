import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const features = [
  { icon: "/BrbMineralAndMetal/icons/Reliable Global Supply Chain.webp", title: "Reliable Global Supply Chain", desc: "Worldwide distribution network" },
  { icon: "/BrbMineralAndMetal/icons/Advanced Geological Expertise.webp", title: "Advanced Geological Expertise", desc: "Cutting-edge mining technology" },
  { icon: "/BrbMineralAndMetal/icons/Environmentally Responsible.webp", title: "Environmentally Responsible", desc: "Sustainable operations" },
  { icon: "/BrbMineralAndMetal/icons/On-Time Delivery.webp", title: "On-Time Delivery", desc: "Quality assurance guaranteed" },
  { icon: "/BrbMineralAndMetal/icons/Part of BRB Group.webp", title: "Part of BRB Group", desc: "Trusted corporate backing" },
  { icon: "/BrbMineralAndMetal/icons/5935473 (1).webp", title: "Industry Leadership", desc: "20+ years of experience" },
  { icon: "/BrbMineralAndMetal/icons/Customer focus.webp", title: "Customer Focus", desc: "Dedicated support team" },
  { icon: "/BrbMineralAndMetal/icons/Market Intelligence.webp", title: "Market Intelligence", desc: "Data-driven decisions" },
];

  return (
    <section
      className="py-20 relative text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('/BrbMineralAndMetal/HomePage/Banner minerals and metals.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 relative inline-block left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Why BRB Minerals <span className="text-[#03A2A7]">& Metals?</span>
        
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.15
              },
            },
          }}
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-[#03A2A7]/50 transition-colors duration-300 cursor-pointer group"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                backgroundColor: "rgba(3, 162, 167, 0.2)",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
            >
           <motion.div 
  className="mb-4 flex justify-center"
  whileHover={{
    scale: 1.2,
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.5 }
  }}
>
  <img 
    src={item.icon}
    alt={item.title}
    className="w-25 h-25 object-contain"
  />
</motion.div>

              <motion.h3 
                className="text-lg font-bold text-gray-100 mb-2 -mt-4 group-hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {item.title}
              </motion.h3>
              <p className="text-sm text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}