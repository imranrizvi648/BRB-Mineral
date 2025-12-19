import { motion } from "framer-motion";
import { Cpu, Gem, Beaker, Shield,Sun } from "lucide-react";

export default function SilverApplications() {
   const applications = [
    { icon: <Gem className="w-6 h-6" />, text: "Jewelry, ornaments, and fine craftsmanship" },
    { icon: <Cpu className="w-6 h-6" />, text: "Electronics, semiconductors, and electrical components" },
    { icon: <Sun className="w-6 h-6" />, text: "Solar panels and renewable energy technologies" },
    { icon: <Shield className="w-6 h-6" />, text: "Medical equipment and antimicrobial applications" },
    { icon: <Beaker className="w-6 h-6" />, text: "Catalysts and specialized industrial processes" },
    
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
            <p className="text-lg text-gray-600 mt-5 max-w-3xl mx-auto">
              Silver is essential to global infrastructure, advanced technologies, and the clean energy transition.
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
