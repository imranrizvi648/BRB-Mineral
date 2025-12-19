import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ClosingStatement() {
  return (
    <div
      className="relative text-white py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage:
          "url('/brbExploration/blackSand/3rd image.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-snug md:leading-tight"
        >
          Supporting Pakistan’s Placer And Heavy <br />
          <span className="text-[#03A2A7]">Mineral Development</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-white/95"
        >
          Black sand is a versatile and valuable material for exploration,
          research, and refining. BRB Exploration is dedicated to responsibly
          developing Pakistan’s alluvial mineral potential while providing
          reliable, high-quality concentrates to local and international buyers.
        </motion.p>

        {/* Bottom Statement */}
        
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#03A2A7]">
          
          </p>
        

      </div>
    </div>
  );
}
