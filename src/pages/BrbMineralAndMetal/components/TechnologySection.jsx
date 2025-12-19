import { motion } from "framer-motion";

export default function TechnologySection() {
 const technologies = [
  { img: "/BrbMineralAndMetal/icons/Drone-based Geological Surveys.webp", title: "Drone-based Geological Surveys", desc: "Aerial mapping and exploration" },
  { img: "/BrbMineralAndMetal/icons/AI-driven Resource Estimation.webp", title: "AI-driven Resource Estimation", desc: "Machine learning for accuracy" },
  { img: "/BrbMineralAndMetal/icons/Eco-friendly Extraction.webp", title: "Eco-friendly Extraction", desc: "Minimizing environmental impact" },
  { img: "/BrbMineralAndMetal/icons/Advanced Processing Systems.webp", title: "Advanced Processing Systems", desc: "State-of-the-art refinement" },
];


  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-center leading-11  relative inline-block left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Research & <span className="text-[#03A2A7]">Technology</span> 
         
        </motion.h2>

        <motion.p
          className="text-center text-lg text-gray-600 max-w-3xl mx-auto mt-5 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Innovation in Mining Technology
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Technology List */}
          <motion.div 
            className="space-y-4"
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
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-[#03A2A7]/10 transition-colors duration-300 cursor-pointer group border border-transparent hover:border-[#03A2A7]/30"
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  show: { opacity: 1, x: 0 }
                }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  x: 8,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
            <motion.img 
  src={tech.img}
  alt={tech.title}
  className="w-18 h-18 object-contain flex-shrink-0"
  whileHover={{ 
    scale: 1.15,
    rotate: [0, -8, 8, 0],
    transition: { duration: 0.5 }
  }}
/>

                <div>
                  <motion.h4 
                    className="font-bold text-lg mb-1 text-gray-900 group-hover:text-[#03A2A7] transition-colors duration-300"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech.title}
                  </motion.h4>
                  <p className="text-gray-600 leading-relaxed">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Card */}
          <motion.div
            className="relative mt-10 md:mt-0"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="/BrbMineralAndMetal/HomePage/tech.webp"
                alt="Technology"
                className="rounded-2xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div 
  className="absolute  -bottom-8 -left-8 bg-linear-to-br from-[#03A2A7] to-[#028a8e] text-white p-6 rounded-xl shadow-2xl border-4 border-white 
             sm:-bottom-6 sm:-left-6 sm:p-4 sm:text-sm sm:rounded-lg"
  initial={{ opacity: 0, y: 20, scale: 0.8 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
  whileHover={{ 
    scale: 1.05,
    y: -5,
    transition: { duration: 0.3 }
  }}
>
  <h4 className="text-md font-bold mb-1  md:text-lg sm:mb-1">Continuous</h4>
  <p className="text-md font-semibold sm:text-base">Improvement</p>
  <motion.p 
    className="text-sm mt-2 opacity-90 sm:text-xs"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.9 }}
    transition={{ delay: 0.6 }}
  >
    R&D for efficiency
  </motion.p>
</motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}