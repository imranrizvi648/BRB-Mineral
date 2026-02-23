export default function OperationSection() {
  const items = [
    {
      title: "Exploration",
      desc: "We conduct detailed geological surveys to locate high-potential mineral deposits and assess site feasibility using modern techniques, ensuring minimal environmental impact.",
      img: "/exploration.webp",
    },
    {
      title: "Extraction",
      desc: "We carefully mine high-grade minerals using advanced and sustainable methods. Our focus is on efficiency while preserving the natural environment.",
      img: "/Extraction.webp",
    },
    {
      title: "Processing",
      desc: "Raw minerals are refined with modern technology to meet global quality standards. This ensures purity, strength, and consistency in every batch.",
      img: "/processing.webp",
    },
    {
      title: "Quality Control",
      desc: "Each stage of production is monitored by experts through strict testing. We guarantee that only premium-quality minerals reach our clients.",
      img: "/qualityControl.webp",
    },
    {
      title: "Delivery",
      desc: "With a reliable supply chain and efficient transport network, we deliver minerals safely and on time across Pakistan and international markets.",
      img: "/logistics.webp",
    },
  ];

  return (
    <section className="w-full px-6 md:px-14 py-16 bg-[#EAEFF3]">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-3 leading-snug">
          <span className="text-[#03A2A7]">Our</span> Operations
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          From extraction to delivery, we ensure quality at every step.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              bg-white p-5 rounded-2xl
              border border-gray-200
              shadow-lg hover:shadow-xl
              transition duration-300
              flex flex-col items-center text-center
              min-h-[360px]
            "
          >
            {/* Icon */}
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4"
            />

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}