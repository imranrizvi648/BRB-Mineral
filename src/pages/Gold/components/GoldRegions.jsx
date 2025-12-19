import { MapPin } from "lucide-react";

export default function GoldRegions({
  regions,
  activeRegion,
  setActiveRegion,
}) {
  return (
    <div className="bg-linear-to-br from-gray-50 to-blue-50 py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-10 text-gray-900 leading-10">
          Pakistan's Gold <span className="text-[#03A2A7]">Potential </span> 
        </h2>

        <p className="text-center text-gray-600 text-base sm:text-lg md:text-lg max-w-3xl mx-auto mb-10 md:mb-12">
       Pakistan hosts significant gold-bearing zones associated with complex geological belts, particularly in regions known for copper-gold porphyry systems and alluvial deposits. Key areas include: </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {regions.map((region, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveRegion(index)}
              onMouseLeave={() => setActiveRegion(null)}
              className="
                group relative bg-white rounded-2xl 
                p-6 sm:p-7 md:p-8 
                border-2 border-gray-200 
                hover:border-[#03A2A7] 
                transition-all duration-500 
                hover:shadow-2xl hover:-translate-y-2
                cursor-pointer overflow-hidden
              "
            >
              {/* Soft Background Hover Gradient */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${region.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10">

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`bg-linear-to-br ${region.color} p-3 sm:p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {region.name}
                  </h3>
                </div>

                {/* Areas */}
                <p className="text-[#03A2A7] font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                  {region.minerals}
                </p>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {region.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}



// import { motion } from "framer-motion";
// import { MapPin } from "lucide-react";

// export default function CopperRegions() {
//   const regions = [
//     {
//       name: "Balochistan (Chagai Metallogenic Belt)",
//       desc: "Home to major porphyry copper-gold systems including Reko Diq, Saindak, and Koh-i-Sultan.",
//       minerals: "Chalcopyrite, Bornite, Chalcocite",
//       color: "#03A2A7", // teal blue
//     },
//     {
//       name: "Khyber Pakhtunkhwa (KPK)",
//       desc: "Dir, Chitral, Swat, and Kohistan host copper-bearing hydrothermal veins.",
//       minerals: "Copper with Gold & Silver",
//       color: "#91563a", // amber/orange
//     },
//     {
//       name: "Gilgit-Baltistan",
//       desc: "Rich polymetallic belts with sulfide veins and porphyry-influenced copper systems.",
//       minerals: "Polymetallic Copper Systems",
//       color: "#91563a", // green
//     },
//     {
//       name: "Azad Jammu & Kashmir (AJK)",
//       desc: "Mountain belts and river systems showing hydrothermal copper anomalies.",
//       minerals: "Hydrothermal Copper",
//       color: "#03A2A7", // red
//     },
//   ];

//   const smoothFade = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
//   };

//   return (
//     <section className="py-14 md:py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <motion.div
//           variants={smoothFade}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-center mb-10 md:mb-14"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
//             Pakistan's Copper Potential
//             <motion.span
//               className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] bg-[#03A2A7]"
//               initial={{ width: 0 }}
//               whileInView={{ width: "6rem" }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//             />
//           </h2>

//           <p className="text-base md:text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
//             Pakistan hosts major copper-rich geological zones, including world-renowned porphyry copper deposits.
//           </p>
//         </motion.div>

//         {/* Regions Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0 },
//             show: { opacity: 1, transition: { staggerChildren: 0.15 } },
//           }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
//         >
//           {regions.map((region, idx) => (
//             <motion.div
//               key={idx}
//               variants={smoothFade}
//               whileHover={{
//                 y: -5,
//                 scale: 1.02,
//                 transition: { duration: 0.2, ease: "easeOut" },
//               }}
//               className="bg-white p-6 md:p-7 rounded-2xl shadow-md border border-gray-100 hover:border-opacity-40 hover:shadow-xl transition-all duration-300 group"
//             >
//               <div className="flex items-start gap-3 md:gap-4">
//                 {/* Icon */}
//                 <div
//                   className="p-2.5 md:p-3 rounded-xl transition-colors duration-300"
//                   style={{ backgroundColor: region.color + "20" }}
//                 >
//                   <MapPin className="w-6 h-6 md:w-7 md:h-7" style={{ color: region.color }} />
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1">
//                   <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: region.color }}>
//                     {region.name}
//                   </h3>

//                   <p className="text-gray-700 text-sm md:text-base mb-3 leading-relaxed">
//                     {region.desc}
//                   </p>

//                   <div className="bg-gray-50 px-3 py-1.5 rounded-lg inline-block">
//                     <span className="text-xs md:text-sm font-semibold text-gray-600">
//                       Key Minerals:{" "}
//                     </span>
//                     <span className="text-xs md:text-sm font-bold" style={{ color: region.color }}>
//                       {region.minerals}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
