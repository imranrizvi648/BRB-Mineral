import { useState, useEffect, useRef } from "react";

export default function ImportantBauxite() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const items = [
    {
      title: "Aluminum Production",
      desc: "From raw bauxite to refined alumina and ultimately aluminum metal.",
      img: "/BauxitePage/aluminum-production (1).webp",
    },
    {
      title: "Construction & Infrastructure",
      desc: "Used in roofing, window frames, and building materials.",
      img: "/BauxitePage/contruction and infrastucture.webp",
    },
    {
      title: "Transportation",
      desc: "A key material in cars, aircraft, trains, and ships due to its light weight and durability.",
      img: "/BauxitePage/transportion.webp",
    },
    {
      title: "Packaging Industry",
      desc: "Essential for beverage cans, foils, and other packaging solutions.",
      img: "/BauxitePage/pack.webp",
    },
    {
      title: "Electrical & Electronics",
      desc: "Used in wiring, appliances, and energy transmission.",
      img: "/BauxitePage/electrical.webp",
    },
  ];

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 sm:px-6 md:px-14 pt-12 md:py-12 md:pt-18 bg-[#F4F7F6] "
    >
      {/* Heading */}
      <div
        className={`
          text-center mb-10 md:mb-14
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
        `}
      >
        <h2 className="text-2xl sm:text-4xl md:text-[48px] font-extrabold mb-3 md:mb-6">
          <span className="text-[#03A2A7]">Importance of </span> Bauxite
        </h2>

        <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
          Bauxite is the world’s primary source of aluminum, a lightweight yet
          strong metal used across multiple industries. Its applications include:
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-5 
          gap-6 sm:gap-6
        "
      >
        {items.map((item, i) => (
          <div
            key={i}
            className={`
              bg-white 
              p-4 sm:p-6 
              rounded-2xl 
              border border-gray-200 
              shadow-xl 
              hover:shadow-2xl 
              transition-all
              duration-700
              ease-out
              flex 
              flex-col 
              items-center 
              text-center 
              py-8 sm:py-10
              hover:scale-105
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
            `}
            style={{
              transitionDelay: `${300 + i * 150}ms`,
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-14 h-14 sm:w-20 sm:h-20 object-contain mb-3 sm:mb-4"
            />

            <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-xs sm:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
