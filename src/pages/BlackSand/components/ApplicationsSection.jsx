import { motion } from "framer-motion";

export default function ApplicationsSection({ applications, images }) {
  // Container animation for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Card animation
  const cardVariants = {
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
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Heading animation
  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <motion.div 
        className="relative overflow-hidden p-6 sm:p-8 md:p-12 rounded-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" }
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="relative z-10">
          {/* Heading */}
          <motion.div 
            className="flex items-center justify-center gap-3 mb-8 sm:mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headingVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: { delay: 0.2, duration: 0.6 }
              }}
              viewport={{ once: true }}
            >
              Applications
            
            </motion.h2>
          </motion.div>

          {/* Grid of Applications */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {applications.map((app, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(150, 105, 40, 0.15)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white shadow-sm rounded-xl p-2 sm:p-6 md:p-6 border border-gray-200 hover:border-[#03A2A7] transition-colors duration-300 group cursor-pointer flex items-center gap-4"
              >
                {/* Image on left */}
                <motion.img
                  src={images[index]}
                  alt={app}
                  className="w-17 h-17  md:w-15 md:h-15 object-cover "
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: index * 0.1 + 0.5, duration: 0.5 }
                  }}
                  viewport={{ once: true }}
                />

                {/* Text on right */}
                <motion.p 
                  className="text-gray-800 text-sm sm:text-base md:text-base font-medium"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ 
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.1 + 0.6, duration: 0.5 }
                  }}
                  viewport={{ once: true }}
                >
                  {app}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
