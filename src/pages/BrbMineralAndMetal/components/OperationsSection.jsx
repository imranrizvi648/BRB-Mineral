import { motion } from "framer-motion";

export default function OperationsSection() {
  return (
    <section id="operations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 relative inline-block left-1/2 -translate-x-1/2 leading-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Operations 
          <span className="text-[#03A2A7]"> Excellence</span>
        </motion.h2>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Image Section */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl group"
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="/baritePage/barite (1).webp"
              alt="Mining Site"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">Extraction & Processing</h3>
                <p className="text-gray-200">
                  Our mining operations follow international safety and environmental standards. We use best-in-class extraction methods to optimize yield while minimizing ecological impact.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Cards */}
          <div className="space-y-6">
            {[
              {
                title: '🔍 Exploration Expertise',
                desc: 'We conduct geophysical surveys, sampling programs, geological mapping, and resource evaluation using modern technology to identify high-value deposits.'
              },
              {
                title: '✓ Quality Control',
                desc: 'Every mineral product undergoes rigorous testing for purity, grade consistency, and compliance with global market standards.'
              },
              {
                title: '🚚 Logistics & Supply Chain',
                desc: 'We maintain an efficient shipping, warehousing, and distribution network to deliver metals to customers worldwide.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-[#03A2A7] mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
