import { motion } from "framer-motion";

export default function AboutSection() {
  const coreValues = [
  { label: "Integrity", icon: "/BrbMineralAndMetal/icons/integrity.webp" },
  { label: "Safety", icon: "/BrbMineralAndMetal/icons/safty.webp" },
  { label: "Innovation", icon: "/BrbMineralAndMetal/icons/Innovation.webp" },
  { label: "Sustainability", icon: "/BrbMineralAndMetal/icons/Sustainability.webp" },
  { label: "Community First", icon: "/BrbMineralAndMetal/icons/Exploration Expertise.webp" },
];


  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center md: mb-4 relative inline-block left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Company 
           <span className=" text-[#03A2A7]"> Overview</span>
        </motion.h2>

        {/* Content Grid */}
        <div className="mt-7 md:mt-16 grid md:grid-cols-2 gap-12 items-center">

          {/* Text Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-gray-700 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              BRB Minerals and Metals is a leading mineral exploration and metal extraction company operating under the umbrella of BRB Group, a diversified enterprise with operations across multiple sectors.
            </motion.p>
            <motion.p
              className="text-gray-700 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We specialize in discovering, developing, and supplying strategically important minerals and metals to domestic and international markets. Through innovation, advanced mining technologies, and ethical practices, we ensure consistent, high-quality output from exploration to final delivery.
            </motion.p>

            {/* Mission & Vision */}
            <div className="mt-8 space-y-4">
             <motion.div
  className="bg-white p-6 pl-2 rounded-xl shadow-md hover:shadow-xl transition-shadow 
             flex flex-col md:flex-row items-start gap-5"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.8 }}
>
  {/* Image Block */}
  <img 
    src="/BrbMineralAndMetal/icons/mission.webp" 
    alt="Vision Icon" 
    className=" w-28 h-28 md:w-22 md:h-22 object-contain mx-auto md:mx-0"
  />
 {/* Text Block */}
  <div className="text-center md:text-left -mt-5">
                <h3 className="text-xl font-bold text-[#03A2A7] mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  To extract and deliver high-quality minerals and metals through innovation, sustainability, and responsible mining practices.
                </p>
                  </div>
              </motion.div>

        <motion.div
  className="bg-white p-6 pl-2 rounded-xl shadow-md hover:shadow-xl transition-shadow 
             flex flex-col md:flex-row items-start gap-5"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.8 }}
>
  {/* Image Block */}
  <img 
    src="/BrbMineralAndMetal/icons/vision.webp" 
    alt="Vision Icon" 
    className="w-30 h-30 md:w-22 md:h-22 object-contain mx-auto md:mx-0"
  />

  {/* Text Block */}
  <div className="text-center md:text-left -mt-5">
    <h3 className="text-xl font-bold text-[#03A2A7] mb-2">Our Vision</h3>
    <p className="text-gray-700">
      To be a global leader in the mineral and metal industry, recognized for operational excellence and environmental stewardship.
    </p>
  </div>
</motion.div>

            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/BrbMineralAndMetal/HomePage/overview.webp"
              alt="Mining Operations"
              className="rounded-2xl shadow-2xl"
            />
            <motion.div
              className="absolute -bottom-6 -right-6 bg-[#03A2A7] text-white p-6 md:p-8 rounded-xl shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">Part of</p>
              <p className="text-xl md:text-2xl font-semibold">BRB Group</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <motion.h3
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Core <span className="text-[#03A2A7]">Values</span>
          </motion.h3>
         <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

  {coreValues.map((item, i) => (
    <motion.div
      key={item.label}
      className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: i * 0.2 }}
    >
      <img
        src={item.icon}
        alt={item.label}
        className="w-20 h-20 md:h-25 md:w-25 mx-auto md:mb-3 object-contain"
      />
      <p className="font-semibold text-gray-800 md:text-lg ">{item.label}</p>
    </motion.div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}
