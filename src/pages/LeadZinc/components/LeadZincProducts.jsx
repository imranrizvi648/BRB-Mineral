import { motion } from "framer-motion";

export default function LeadZincProducts() {
  const products = [
    "Lead-zinc ore with strong galena and sphalerite content",
    "High-quality concentrates with reliable Pb and Zn percentages",
    "Assay-certified materials ensuring consistent and transparent quality",
    "Bulk or customized supply to accommodate industrial and refining requirements",
    "Legally and responsibly sourced material, aligned with Pakistan’s mining standards",
  ];

  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  mb-6 relative inline-block">
                Our  <span className="text-[#03A2A7]">Product</span>
               
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-lg mb-8 leading-relaxed md:mt-6">
                BRB Exploration provides high-quality Lead-Zinc products certified and ethically sourced from Pakistan's premier mineral zones.
              </p>
              
              <motion.div 
                className="space-y-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  }
                }}
              >
                {products.map((product, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#03A2A7]/5 transition-all duration-300 group"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="bg-[#03A2A7] text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{product}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/leadZinc/2nd banner.webp" 
                  alt="Copper Ore" 
                  className="h-70 w-full md:w-150 md:h-100 object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-linear-to-br from-[#03A2A7] to-[#028a8e] text-white p-6 rounded-xl shadow-2xl border-4 border-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <p className="text-3xl font-black">100%</p>
                <p className="text-sm font-semibold">Quality Assured</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
