import { CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductsSection({ products }) {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="inline-block relative mb-6 lg:mb-10">
          <h2 className="text-3xl md:text-5xl  font-bold text-gray-900">
            Our <span className="text-[#03A2A7]">Products</span>
          </h2>
          {/* <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2EA383] via-[#03A2A7] to-[#157196]"></div> */}
        </div>
        <p className="text-gray-700 text-base md:text-lg">
          Premium quality placer Sand with full traceability
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="bg-gradient-to-br from-white to-yellow-50 rounded-xl p-6 sm:p-7 md:p-8 border-2 border-gray-200 hover:border-[#966928] transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
          >
            {/* Gradient Bubble */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FDD95F]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            
            {/* Content */}
            <div className="flex items-start gap-3 relative z-10">
              <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#2EA383] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-base">{product.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="bg-gradient-to-r from-[#2EA383]/10 to-[#157196]/10 rounded-2xl p-6 sm:p-8 border-2 border-[#03A2A7]/30">
        <p className="text-center text-base sm:text-lg md:text-lg text-gray-800 font-medium flex items-center justify-center gap-3">
          <Award className="w-5 sm:w-6 h-5 sm:h-6 text-[#966928]" />
          Each batch is prepared to ensure consistency and ease of downstream processing.
        </p>
      </div>

    </div>
  );
}
