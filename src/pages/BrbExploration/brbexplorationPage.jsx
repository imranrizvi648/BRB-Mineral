import React from 'react'
import HeroSection from './Components/HeroSection'
import WhoWeAreSection from './Components/WhoWeAreSection'
import OurOperationsSection from './Components/OurOperationsSection'
import WhyChooseBRB from './Components/WhyChooseBRBSection'
import SustainabilitySection from './Components/SustainabilitySection'
import AboutUsSection from './Components/AboutUsSection'
import VideoSection from './Components/videoSection'
const brbexplorationPage = () => {
  return (
    <div>
      
<HeroSection/>
<AboutUsSection/>
<OurOperationsSection/>
<VideoSection />
<WhoWeAreSection/>
<WhyChooseBRB/>
<SustainabilitySection/>


    </div>
  )
}

export default brbexplorationPage





// import React from "react";
// import { motion } from "framer-motion";

// export default function BrbexplorationPage() {
//   return (
//     <div className="w-full font-sans text-gray-800">

//       {/* HERO SECTION */}
//       <section
//         className="relative w-full h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 max-w-3xl px-6 text-white"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//             BRB Exploration
//           </h1>
//           <p className="mt-4 text-lg md:text-xl">
//             Advancing the Future of Mineral Discovery
//           </p>
//           <p className="mt-3 text-base md:text-lg">
//             A trusted subsidiary of BRB Group, dedicated to responsible exploration
//             and extraction of high-value natural resources including Placer Gold and
//             Black Sand minerals.
//           </p>

//           <div className="mt-6 flex items-center justify-center gap-4">
//             <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-md hover:bg-gray-200">
//               Learn More
//             </button>
//             <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow-md hover:bg-yellow-600">
//               Our Products
//             </button>
//           </div>
//         </motion.div>
//       </section>

//       {/* WHO WE ARE */}
//       <section className="py-20 px-6 md:px-20 bg-gray-50">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             BRB Exploration is a mineral and mining company focused on unlocking the
//             value of natural deposits through innovation, responsibility, and
//             long-term sustainability. With advanced geological expertise and ethical
//             mining practices, we deliver high-quality mineral products to global
//             markets.
//           </p>
//         </div>
//       </section>

//       {/* OUR PRODUCTS */}
//       <section className="py-20 px-6 md:px-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Our Products
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//           {/* Product 1 */}
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1604072366595-c3a5e7c8d4d9?q=80&w=1200&auto=format&fit=crop"
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-2">Placer Gold</h3>
//               <p className="text-gray-700">
//                 High-purity alluvial gold sourced through efficient placer mining.
//               </p>
//             </div>
//           </div>

//           {/* Product 2 */}
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1581090464777-36ce0b4aba90?q=80&w=1200&auto=format&fit=crop"
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-2">Black Sand Minerals</h3>
//               <p className="text-gray-700">
//                 Magnetite-rich heavy mineral sands used in industrial and
//                 metallurgical applications.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-10">
//           <button className="px-6 py-3 bg-black text-white rounded-xl shadow hover:bg-gray-800">
//             View All Products
//           </button>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="py-20 px-6 md:px-20 bg-gray-100">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Why Choose BRB Exploration
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
//           {[
//             "Proven geological expertise",
//             "Sustainable mining practices",
//             "Reliable supply & transparent operations",
//             "Part of the trusted BRB Group",
//           ].map((item, idx) => (
//             <div key={idx} className="bg-white p-6 rounded-2xl shadow">
//               <span className="text-3xl">✔</span>
//               <p className="mt-3 text-gray-700 font-medium">{item}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ABOUT US */}
//       <section className="py-20 px-6 md:px-20">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>

//           <p className="text-gray-700 leading-relaxed mb-6">
//             BRB Exploration is the mineral exploration and extraction arm of BRB
//             Group, established to meet the growing global demand for high-quality
//             minerals and metals. Our operations span exploration, resource
//             assessment, extraction, and supply of mineral commodities including
//             placer gold and heavy black sand.
//           </p>

//           <p className="text-gray-700 leading-relaxed mb-6">
//             We work with cutting-edge technologies and a highly experienced mining
//             team to ensure operational efficiency and environmental responsibility.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
//             {/* Mission */}
//             <div className="bg-gray-50 p-6 rounded-xl shadow">
//               <h3 className="text-xl font-bold mb-3">Our Mission</h3>
//               <p className="text-gray-700">
//                 To responsibly explore, develop, and supply mineral resources that
//                 contribute to industrial growth and sustainable development.
//               </p>
//             </div>

//             {/* Vision */}
//             <div className="bg-gray-50 p-6 rounded-xl shadow">
//               <h3 className="text-xl font-bold mb-3">Our Vision</h3>
//               <p className="text-gray-700">
//                 To be a leading mineral exploration company recognized for
//                 excellence, integrity, and environmental stewardship.
//               </p>
//             </div>

//             {/* Values */}
//             <div className="bg-gray-50 p-6 rounded-xl shadow">
//               <h3 className="text-xl font-bold mb-3">Our Values</h3>
//               <ul className="text-gray-700 space-y-2">
//                 <li>• Safety first</li>
//                 <li>• Transparency and ethics</li>
//                 <li>• Innovation in mining</li>
//                 <li>• Sustainable development</li>
//                 <li>• Community partnership</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
