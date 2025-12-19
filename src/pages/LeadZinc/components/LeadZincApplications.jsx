import { motion } from "framer-motion";
import { Leaf, Zap, Globe, Factory, Home, Beaker , Award, Battery, Shield, Layers } from "lucide-react"; // replaced Cube with Layers

export default function LeadZincApplications() {
  const applications = [
    { icon: <Battery className="w-6 h-6" />, text: "Lead-acid batteries and energy storage" },
    { icon: <Shield className="w-6 h-6" />, text: "Anti-corrosion galvanizing for steel products" },
    { icon: <Layers className="w-6 h-6" />, text: "Industrial alloys (brass, bronze, solder)" }, // updated
    { icon: <Home className="w-6 h-6" />, text: "Infrastructure components and construction materials" },
    { icon: <Beaker  className="w-6 h-6" />, text: "Chemical and metallurgical processes" },
  ];

  return (
   
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  mb-4 relative inline-block">
              Applications
            
            </h2>
            <p className="text-lg text-gray-600 mt- max-w-3xl mx-auto">
              Lead and Zinc are essential to global infrastructure, energy storage, and durable industrial applications.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
          >
            {applications.map((app, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-[#03A2A7]/5  hover:border-[#03A2A7]/30 transition-all duration-300 group"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: { opacity: 1, scale: 1 }
                }}
                whileHover={{ y: -5, scale: 1.02, ease: [0.22, 0.36, 0.36, 0.22]}}
              >
                <div className="bg-[#03A2A7]/10 p-3 rounded-xl text-[#03A2A7] group-hover:bg-[#03A2A7] group-hover:text-white transition-all duration-300">
                  {app.icon}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{app.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

  );
}
