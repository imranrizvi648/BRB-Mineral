


import React, { useState } from 'react';
import CopperHero from "./components/CopperHero";
import CopperRegions from "./components/CopperRegions";
import CopperProducts from "./components/CopperProducts";
import CopperWhyChoose from "./components/CopperWhyChoose";
import CopperApplications from "./components/CopperApplications";
import CopperCTA from "./components/CopperCTA";
import { MapPin, Droplets, Shield, Gem,Leaf,TrendingUp,Award } from 'lucide-react';
import BannerSection from './components/BannerSection';


export default function CopperPage() {
  const [activeRegion, setActiveRegion] = useState(null);

   const regions = [
   
    {
      name: "Balochistan (Chagai Metallogenic Belt)",
      desc: "Home to major porphyry copper-gold systems including Reko Diq, Saindak, and Koh-i-Sultan.",
      minerals: "Chalcopyrite, Bornite, Chalcocite",
      color: "from-[#2EA383] to-[#157196]" 
    },
      {
      name: "Azad Jammu & Kashmir (AJK)",
      desc: "Mountain belts and river systems showing hydrothermal copper anomalies.",
      minerals: "Hydrothermal Copper",
      color: "from-[#966928] to-[#FDD95F]" 
    },
    {
      name: "Khyber Pakhtunkhwa (KPK)",
      desc: "Dir, Chitral, Swat, and Kohistan host copper-bearing hydrothermal veins.",
      minerals: "Copper with Gold & Silver",
      color: "from-[#966928] to-[#FDD95F]" 
    },
    {
      name: "Gilgit-Baltistan",
      desc: "Rich polymetallic belts with sulfide veins and porphyry-influenced copper systems.",
      minerals: "Polymetallic Copper Systems",
      color: "from-[#2EA383] to-[#157196]" 
    },
   
  ];
      const features = [
    {
      icon: MapPin,
      title: "Deep Local Geological Understanding",
      desc: "Specialized exploration teams using advanced geophysics, geochemical sampling, and structural mapping"
    },
    {
      icon: Leaf,
      title: "Sustainable Operations",
      desc: "Environmental management, community development, safe extraction, and land rehabilitation"
    },
    {
      icon: TrendingUp,
      title: "Stable Supply Chain",
      desc: "Reliable logistics and continuous exploration ensuring long-term copper availability"
    },
    {
      icon: Award,
      title: "Custom Material Grades",
      desc: "Ore and concentrates tailored to specifications of industrial buyers and refiners"
    }
  ];
  return (
    <div className="bg-white">
      <CopperHero />
      <CopperRegions regions={regions} activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
      <CopperProducts />
      <BannerSection/>
      <CopperWhyChoose features={features}/>
      <CopperApplications />
      <CopperCTA />
    </div>
  );
}








// import { motion } from "framer-motion";
// import { MapPin, Shield, TrendingUp, Zap, Factory, Leaf, Award, Globe } from "lucide-react";

// export default function CopperPage() {
//   const regions = [
//     {
//       name: "Balochistan (Chagai Metallogenic Belt)",
//       desc: "Home to globally recognized porphyry copper-gold systems such as Reko Diq, Saindak, and Koh-i-Sultan.",
//       minerals: "Chalcopyrite, Bornite, Chalcocite"
//     },
//     {
//       name: "Khyber Pakhtunkhwa (KPK)",
//       desc: "Areas like Dir, Chitral, Swat, and Kohistan contain copper-bearing shear zones and hydrothermal veins.",
//       minerals: "Copper with Gold & Silver"
//     },
//     {
//       name: "Gilgit-Baltistan",
//       desc: "Rich polymetallic belts hosting copper mineralization in sulfide veins and porphyry-influenced systems.",
//       minerals: "Polymetallic Copper Systems"
//     },
//     {
//       name: "Azad Jammu & Kashmir (AJK)",
//       desc: "River systems and mountainous zones show copper anomalies linked to hydrothermal activity.",
//       minerals: "Hydrothermal Copper"
//     }
//   ];

//   const products = [
//     "High-grade copper ore from Pakistan's primary mineral zones",
//     "Copper concentrates containing chalcopyrite and other key copper minerals",
//     "Certified Cu content, documented through reliable assay testing",
//     "Ethically and legally sourced materials, aligned with national standards",
//     "Bulk and customizable supply options for smelters, refiners, and processors"
//   ];

//   const whyChoose = [
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

//   const applications = [
//     { icon: <Zap className="w-6 h-6" />, text: "Electrical wiring, cables, and power transmission" },
//     { icon: <Leaf className="w-6 h-6" />, text: "Renewable energy technologies (solar and wind)" },
//     { icon: <Globe className="w-6 h-6" />, text: "Electric vehicles, batteries, and charging infrastructure" },
//     { icon: <Factory className="w-6 h-6" />, text: "Plumbing, construction, and industrial manufacturing" },
//     { icon: <Shield className="w-6 h-6" />, text: "Alloys such as bronze and brass" },
//     { icon: <Award className="w-6 h-6" />, text: "Electronics and high-tech components" }
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section 
//         className="relative h-[70vh] flex items-center justify-center overflow-hidden"
//         style={{
//           backgroundImage: "url(https://images.unsplash.com/photo-1611251184666-d6c283e52dfd?w=1600&q=80)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed"
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        
//         <motion.div 
//           className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <motion.h1 
//             className="text-5xl md:text-7xl font-black mb-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <span className="text-[#03A2A7]">Copper</span>
//           </motion.h1>
//           <motion.p 
//             className="text-xl md:text-2xl mb-4 font-semibold"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//           >
//             Strategic Industrial Metal from World-Class Mineral Belts
//           </motion.p>
//           <motion.p 
//             className="text-lg text-gray-200 leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
//           >
//             Pakistan's high-potential porphyry copper systems powering renewable energy, electric vehicles, and global infrastructure
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* Copper Potential Section */}
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
//               Pakistan's Copper Potential
//               <motion.span 
//                 className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 bg-[#03A2A7]"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "8rem" }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//               ></motion.span>
//             </h2>
//             <p className="text-lg text-gray-600 mt-8 max-w-4xl mx-auto leading-relaxed">
//               Pakistan hosts some of the world's most significant geological environments for copper mineralization, 
//               with globally recognized porphyry copper systems and polymetallic mineral zones.
//             </p>
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
//             {regions.map((region, idx) => (
//               <motion.div
//                 key={idx}
//                 className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#03A2A7]/30 hover:shadow-2xl transition-all duration-300 group"
//                 variants={{
//                   hidden: { opacity: 0, y: 40, scale: 0.95 },
//                   show: { opacity: 1, y: 0, scale: 1 }
//                 }}
//                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="bg-[#03A2A7]/10 p-3 rounded-xl group-hover:bg-[#03A2A7]/20 transition-colors duration-300">
//                     <MapPin className="w-8 h-8 text-[#03A2A7]" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-[#03A2A7] mb-3 group-hover:text-[#028a8e] transition-colors duration-300">
//                       {region.name}
//                     </h3>
//                     <p className="text-gray-700 mb-3 leading-relaxed">{region.desc}</p>
//                     <div className="bg-gray-50 px-4 py-2 rounded-lg inline-block">
//                       <span className="text-sm font-semibold text-gray-600">Key Minerals: </span>
//                       <span className="text-sm text-[#03A2A7] font-bold">{region.minerals}</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Product Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
//                 Our Product
//                 <motion.span 
//                   className="absolute -bottom-3 left-0 h-1 bg-[#03A2A7]"
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "6rem" }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//                 ></motion.span>
//               </h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed mt-6">
//                 BRB Exploration provides high-quality copper products certified and ethically sourced from Pakistan's premier mineral zones.
//               </p>
              
//               <motion.div 
//                 className="space-y-4"
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 variants={{
//                   hidden: { opacity: 0 },
//                   show: {
//                     opacity: 1,
//                     transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//                   }
//                 }}
//               >
//                 {products.map((product, idx) => (
//                   <motion.div
//                     key={idx}
//                     className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#03A2A7]/5 transition-all duration-300 group"
//                     variants={{
//                       hidden: { opacity: 0, x: -20 },
//                       show: { opacity: 1, x: 0 }
//                     }}
//                     whileHover={{ x: 8 }}
//                   >
//                     <div className="bg-[#03A2A7] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
//                       <span className="text-xs font-bold">✓</span>
//                     </div>
//                     <p className="text-gray-700 leading-relaxed">{product}</p>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 40, scale: 0.95 }}
//               whileInView={{ opacity: 1, x: 0, scale: 1 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//               className="relative"
//             >
//               <div className="overflow-hidden rounded-2xl shadow-2xl">
//                 <img 
//                   src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80" 
//                   alt="Copper Ore" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <motion.div
//                 className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#03A2A7] to-[#028a8e] text-white p-6 rounded-xl shadow-2xl border-4 border-white"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//               >
//                 <p className="text-3xl font-black">100%</p>
//                 <p className="text-sm font-semibold">Quality Assured</p>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
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
//                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

//       {/* Applications Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
//               Applications
//               <motion.span 
//                 className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 bg-[#03A2A7]"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "6rem" }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//               ></motion.span>
//             </h2>
//             <p className="text-lg text-gray-600 mt-8 max-w-3xl mx-auto">
//               Copper is foundational to global infrastructure and the clean energy transition
//             </p>
//           </motion.div>

//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-80px" }}
//             variants={{
//               hidden: { opacity: 0 },
//               show: {
//                 opacity: 1,
//                 transition: { staggerChildren: 0.08, delayChildren: 0.1 }
//               }
//             }}
//           >
//             {applications.map((app, idx) => (
//               <motion.div
//                 key={idx}
//                 className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-[#03A2A7]/5 border border-transparent hover:border-[#03A2A7]/30 transition-all duration-300 group"
//                 variants={{
//                   hidden: { opacity: 0, scale: 0.9 },
//                   show: { opacity: 1, scale: 1 }
//                 }}
//                 whileHover={{ x: 5, scale: 1.02 }}
//               >
//                 <div className="bg-[#03A2A7]/10 p-3 rounded-xl text-[#03A2A7] group-hover:bg-[#03A2A7] group-hover:text-white transition-all duration-300">
//                   {app.icon}
//                 </div>
//                 <p className="text-gray-700 font-medium leading-relaxed">{app.text}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section 
//         className="py-20 relative text-white overflow-hidden"
//         style={{
//           backgroundImage: "url(https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=1600&q=80)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed"
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
        
//         <motion.div 
//           className="relative z-10 max-w-4xl mx-auto px-4 text-center"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <h2 className="text-4xl md:text-5xl font-black mb-6">
//             Building Pakistan's <span className="text-[#03A2A7]">Copper-Driven Future</span>
//           </h2>
//           <p className="text-xl text-gray-200 mb-8 leading-relaxed">
//             BRB Exploration is committed to unlocking Pakistan's copper potential—delivering high-quality, 
//             responsibly sourced materials that support national development and international industry.
//           </p>
//           <motion.button
//             className="bg-[#03A2A7] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-[#028a8e] transition-colors duration-300"
//             whileHover={{ scale: 1.05, y: -3 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Contact Us Today
//           </motion.button>
//           <p className="mt-12 text-2xl font-bold text-[#03A2A7]">
//             BRB Exploration: Powering Pakistan's Minerals. Empowering Global Progress.
//           </p>
//         </motion.div>
//       </section>
//     </div>
//   );
// }