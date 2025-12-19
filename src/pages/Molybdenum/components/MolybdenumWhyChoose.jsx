import React from "react";

export default function MolybdenumChooseUsSection({ features }) {
  return (
     <section className="bg-linear-to-br from-blue-50 to-cyan-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  text-gray-900 mb-4">
            Why Choose <span className="text-[#03A2A7]">BRB Exploration</span>?
          </h2>
          <p className="
text-gray-600 text-base sm:text-lg md:text-lg max-w-2xl mx-auto">
       Excellence in every aspect of molybdenite exploration and production
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon; 
            return (
              <div
                key={index}
                className="relative group bg-white rounded-2xl p-6  border-2 border-gray-200 hover:border-[#03A2A7] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden text-center"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-[#2EA383]/5 to-[#157196]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Feature Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="bg-linear-to-br from-[#2EA383] to-[#157196] p-4 rounded-xl mb-4 mx-auto w-fit shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




//  import { MapPin, Shield, TrendingUp, Zap, Factory, Leaf, Award, Globe } from "lucide-react";
// import { motion } from "framer-motion";

// export default function CopperWhyChoose() {
//     const whyChoose = [
//     {
//       icon: <MapPin className="w-8 h-8" />,
//       title: "Deep Local Geological Understanding",
//       desc: "Specialized exploration teams using advanced geophysics, geochemical sampling, and structural mapping"
//     },
//     {
//       icon: <Leaf className="w-8 h-8" />,
//       title: "Sustainable Operations",
//       desc: "Environmental management, community development, safe extraction, and land rehabilitation"
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Stable Supply Chain",
//       desc: "Reliable logistics and continuous exploration ensuring long-term copper availability"
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Custom Material Grades",
//       desc: "Ore and concentrates tailored to specifications of industrial buyers and refiners"
//     }
//   ];

//   return (
    
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
//               Why Choose BRB Exploration?
//               <motion.span 
//                 className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 bg-[#03A2A7]"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "8rem" }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//               ></motion.span>
//             </h2>
//           </motion.div>

//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 gap-8"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-80px" }}
//             variants={{
//               hidden: { opacity: 0 },
//               show: {
//                 opacity: 1,
//                 transition: { staggerChildren: 0.12, delayChildren: 0.1 }
//               }
//             }}
//           >
//             {whyChoose.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#03A2A7]/30 hover:shadow-2xl transition-all duration-300 group"
//                 variants={{
//                   hidden: { opacity: 0, y: 40, scale: 0.95 },
//                   show: { opacity: 1, y: 0, scale: 1 }
//                 }}
//                 transition={{ duration: 0, ease: [0.22, 1, 0.36, 1] }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//               >
//                 <div className="bg-[#03A2A7]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-[#03A2A7] group-hover:bg-[#03A2A7] group-hover:text-white transition-all duration-300">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#03A2A7] transition-colors duration-300">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//   );
// }
