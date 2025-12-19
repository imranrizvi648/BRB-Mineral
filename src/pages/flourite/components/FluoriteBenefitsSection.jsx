import { useState, useEffect, useRef } from "react";

const FluoriteBenefitsSection = () => {
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
      className="w-[92%] sm:w-[90%] md:w-[85%] mx-auto py-14 sm:py-16 md:py-20 mt-10 md:mt-10"
    >
      {/* Heading */}
      <h2
        className={`
          text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
        `}
      >
        Unlocking the Potential
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
        Currently, phosphate mining in Pakistan is limited and often carried out
        through conventional techniques, which restricts efficiency and output.
        By adopting modern mining technology and advanced processing methods,
        Pakistan can
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
            Increase efficiency and reduce mineral loss.
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
            Ensure high-quality production that meets global standards.
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
            Create job opportunities and support local communities.
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
            Contribute significantly to Pakistan’s GDP through exports.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FluoriteBenefitsSection;
