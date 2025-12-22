import { motion } from "framer-motion";

export default function TrustedPartnerSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 items-start">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:ml-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-[#03A2A7]">Your Trusted</span> <br />
            <span>Minerals</span> <br />
            <span>Partner</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            We build long-term partnerships by delivering consistent value 
            and reliability in every deal.
          </p>

       <a href="https://brbgroup.org/who-we-are/">
  <button
    className="
      bg-[#03A2A7] hover:bg-[#3F4047]
      px-6 py-3
      rounded-lg
      font-semibold
      text-white
      transition
      w-full sm:w-auto
    "
  >
    Discover How We Create Impact
  </button>
</a>
        </motion.div>

        {/* RIGHT SIDE – RESPONSIVE CARD GRID */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:mr-20"
        >
          {[
            {
              title: "Quality Assured",
              description:
                "From essential raw materials to high-demand minerals, our wide portfolio meets the needs of global industries.",
              icon: "/portfolio.webp",
            },
            {
              title: "Global Network",
              description:
                "With an efficient supply chain, we ensure smooth delivery across Pakistan and international markets.",
              icon: "/network (12).webp",
            },
            {
              title: "Sustainable Mining",
              description:
                "Every product is backed by strict quality control, ensuring only the finest minerals reach our clients.",
              icon: "/Quality Assurance Badge Icon (1).webp",
            },
            {
              title: "Reliable Delivery",
              description:
                "Our experts deliver excellence at every stage with technical expertise and industry knowledge.",
              icon: "/team (1).webp",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="
                bg-[#F8FAFA]
                shadow-sm
                rounded-2xl
                p-5 sm:p-6 lg:p-8
                flex
                items-start
                gap-4
                hover:shadow-md
                cursor-pointer
              "
            >
              {/* ICON LEFT */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
              />

              {/* TEXT */}
              <div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
