import { motion } from "framer-motion";

export default function WhyChooseUsSection({ features }) {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-3 lg:mb-8 leading-10 text-gray-900">
          Why Choose <span className="text-[#03A2A7]">BRB Exploration</span>?
        </h2>
        <p className="text-center text-gray-700 text-base md:text-lg mb-10 sm:mb-12">
          Excellence in every aspect of placer gold production
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-[#03A2A7] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group text-center relative overflow-hidden"
              >
                {/* Soft hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2EA383]/5 to-[#157196]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon with hover effects */}
                  <div className="bg-gradient-to-br from-[#2EA383] to-[#157196] p-3 sm:p-4 rounded-xl mb-4 mx-auto w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
