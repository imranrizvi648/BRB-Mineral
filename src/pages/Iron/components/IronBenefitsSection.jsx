import { useState, useEffect, useRef } from "react";

export default function IronBenefitsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
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
      className="w-[92%] sm:w-[90%] md:w-[85%] mx-auto py-14 sm:py-16 md:py-20 mt-10 md:mt-7"
    >
      {/* Heading */}
      <h2
        className={`
          text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
        `}
      >
        Opportunities for Pakistan
      </h2>

      {/* Line Under Heading */}
      <div
        className={`
          h-1 bg-gradient-to-r from-[#7FBD68] to-[#25949B] mt-2 mb-5 sm:mb-6
          transition-all duration-1000 ease-out delay-200
          ${isVisible ? "opacity-100 w-14 sm:w-16" : "opacity-0 w-0"}
        `}
      ></div>

      {/* Description */}
      <p
        className={`
          text-gray-600 leading-relaxed max-w-4xl text-sm sm:text-base md:text-[18px]
          transition-all duration-1000 ease-out delay-300
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        Despite vast reserves, Pakistan's iron ore sector remains underutilized,
        with much of the country relying on imported steel. By investing in
        modern mining, processing plants, and steel manufacturing facilities,
        Pakistan can:
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">

        {/* Card 1 */}
        <div
          className={`
            bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex items-start gap-3
            transition-all duration-700 ease-out hover:shadow-xl hover:scale-105
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          `}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="w-3 h-3 bg-[#2BA56E] rounded-full mt-1"></div>
          <p className="text-gray-800 font-medium text-sm sm:text-base">
            Achieve self-sufficiency in steel production
          </p>
        </div>

        {/* Card 2 */}
        <div
          className={`
            bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex items-start gap-3
            transition-all duration-700 ease-out hover:shadow-xl hover:scale-105
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          `}
          style={{ transitionDelay: "650ms" }}
        >
          <div className="w-3 h-3 bg-[#2BA56E] rounded-full mt-1"></div>
          <p className="text-gray-800 font-medium text-sm sm:text-base">
            Reduce dependence on costly imports
          </p>
        </div>

        {/* Card 3 */}
        <div
          className={`
            bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex items-start gap-3
            transition-all duration-700 ease-out hover:shadow-xl hover:scale-105
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          `}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="w-3 h-3 bg-[#2BA56E] rounded-full mt-1"></div>
          <p className="text-gray-800 font-medium text-sm sm:text-base">
            Boost industrial growth and infrastructure development.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className={`
            bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex items-start gap-3
            sm:col-span-2 md:col-span-1
            transition-all duration-700 ease-out hover:shadow-xl hover:scale-105
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          `}
          style={{ transitionDelay: "950ms" }}
        >
          <div className="w-3 h-3 bg-[#2BA56E] rounded-full mt-1"></div>
          <p className="text-gray-800 font-medium text-sm sm:text-base">
            Create jobs and attract foreign investment.
          </p>
        </div>

        {/* Card 5 */}
        <div
          className={`
            bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex items-start gap-3
            transition-all duration-700 ease-out hover:shadow-xl hover:scale-105
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          `}
          style={{ transitionDelay: "1100ms" }}
        >
          <div className="w-3 h-3 bg-[#2BA56E] rounded-full mt-1"></div>
          <p className="text-gray-800 font-medium text-sm sm:text-base">
            Position itself as a regional hub for iron and steel production.
          </p>
        </div>
      </div>
    </section>
  );
}
