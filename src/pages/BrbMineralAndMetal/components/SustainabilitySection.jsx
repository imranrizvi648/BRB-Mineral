import { motion } from "framer-motion";

export default function SustainabilitySection() {
  const sustainabilityData = [
  {
    image: "/BrbMineralAndMetal/icons/Environmental Protection.webp",
    title: "Environmental Protection",
    content: [
      "Low-impact mining",
      "Water management",
      "Land restoration",
      "Emission reduction",
      "Waste control",
    ],
    type: "list",
  },
  {
    image: "/BrbMineralAndMetal/icons/Sustainable Practices.webp",
    title: "Sustainable Practices",
    content:
      "Our operations align with international environmental regulations and adopt technologies that reduce ecological disturbance.",
    type: "text",
  },
  {
    image: "/BrbMineralAndMetal/icons/Community Empowerment.webp",
    title: "Community Empowerment",
    content:
      "We support local communities through employment, development projects, and partnerships that promote long-term regional growth.",
    type: "text",
  },
  {
    image: "/BrbMineralAndMetal/icons/Ethical Standards.webp",
    title: "Ethical Standards",
    content:
      "Compliance with government regulations and global mining guidelines is a core part of our identity.",
    type: "text",
  },
];


  return (
    <section id="sustainability" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-center relative leading-11 inline-block left-1/2 -translate-x-1/2 text-black"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Commitment to <span className="text-[#03A2A7]">Sustainability</span>
       
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
                staggerChildren: 0.12,
                delayChildren: 0.1
              },
            },
          }}
        >
          {sustainabilityData.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-gray-100 hover:border-[#03A2A7]/30 group"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 },
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
              <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl ">
  <img
    src={item.image}
    alt={item.title}
    className="w-25 h-25 object-contain"
  />
</div>
              <motion.h3 
                className="text-2xl font-bold text-[#03A2A7] mb-4 group-hover:text-[#028a8e] transition-colors duration-300"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                {item.title}
              </motion.h3>
              {item.type === "list" ? (
                <ul className="space-y-2 text-gray-700">
                  {item.content.map((point, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: i * 0.08,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-[#03A2A7] font-bold">✓</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}