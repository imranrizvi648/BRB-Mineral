import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function RegionsSection({ regions, activeRegion, setActiveRegion }) {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-3 lg:mb-8 text-gray-900">
          <span className="text-[#03A2A7]">Pakistan’s Black </span> Sand Potential
        </h2>

        <p className="text-center text-gray-700 text-base md:text-lg max-w-3xl mx-auto mb-10 md:mb-12">
          Black sand forms when heavy minerals accumulate in riverbeds, coastal zones, and alluvial plains. Several regions in Pakistan are recognized for their mineral-rich black sands, including:
        </p>

        {/* Grid of Regions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              onMouseEnter={() => setActiveRegion(index)}
              onMouseLeave={() => setActiveRegion(null)}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 md:p-8 border-2 border-gray-200 hover:border-[#03A2A7] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${region.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`bg-gradient-to-br ${region.color} p-3 sm:p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{region.name}</h3>
                </div>

                {/* Areas */}
                <p className="text-[#03A2A7] font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                  {region.areas}
                </p>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {region.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
