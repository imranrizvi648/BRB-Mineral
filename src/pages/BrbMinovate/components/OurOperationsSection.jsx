import { motion } from "framer-motion";

export default function OperationSection() {
  const items = [
    {
      title: "Exploration",
      desc: "Advanced geological mapping & sampling designed specifically for gold-rich placer zones.",
      img: "/Extraction.webp",
    },
    {
      title: "Mining & Extraction",
      desc: "Low-impact alluvial extraction processes that maximize gold yield while protecting ecosystems.",
      img: "/processing.webp",
    },
    {
      title: "Processing",
      desc: "Modern sluices, concentrators, and recovery systems to separate & refine placer gold.",
      img: "/qualityControl.webp",
    },
    {
      title: "Quality Control",
      desc: "Rigorous assessment to meet international standards before delivery.",
      img: "/logistics.webp",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "8rem",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="w-full px-6 sm:px-10 md:px-16 lg:px-24 md:pb-20 md:pt-15 bg-gray-100">
      
      {/* Heading */}
      <motion.div 
        className="text-center mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          variants={headingVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-snug"
        >
          <span className="text-[#03A2A7]">Our</span> Operations
        </motion.h2>
        
      
        
        <motion.p 
          variants={headingVariants}
          className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
        >
         From the stream bed to the final doré, we ensure quality at every step, focusing solely on placer deposits.
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              scale: 1.03,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 object-contain mb-4"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ 
                scale: 1, 
                rotate: 0,
                transition: {
                  duration: 0.6,
                  delay: i * 0.2 + 0.3,
                  ease: [0.34, 1.56, 0.64, 1]
                }
              }}
              viewport={{ once: true }}
              whileHover={{ 
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.5 }
              }}
            />
            
            <motion.h3 
              className="text-lg sm:text-xl md:text-2xl font-bold mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { delay: i * 0.2 + 0.5, duration: 0.5 }
              }}
              viewport={{ once: true }}
            >
              {item.title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 text-sm sm:text-base md:text-[16px] leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { delay: i * 0.2 + 0.6, duration: 0.5 }
              }}
              viewport={{ once: true }}
            >
              {item.desc}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}