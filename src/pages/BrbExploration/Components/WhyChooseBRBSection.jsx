import { useState, useEffect, useRef } from "react";

export default function WhyChooseBRB() {
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
  <div className="bg-[#EDFAFF]">
    <section
      ref={sectionRef}
      className="w-[92%] sm:w-[90%] md:w-[85%] mx-auto  sm:py-16 md:py-20 mt-6 "
    >
      {/* Heading */}
      <h2
        className={`
          text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
        `}
      >
        Why Choose <span className="text-[#03A2A7]">BRB Exploration</span>
      </h2>

     

      
{/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">

  {/* Card 1 */}
  <div
    className={`
      bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md
      flex items-center gap-4
      transition-all duration-700 ease-out hover:shadow-xl hover:scale-105
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
    `}
    style={{ transitionDelay: "500ms" }}
  >
    <img
      src="/brbExploration/provengoogle.webp"
      alt="Geology"
      className="w-15 h-15 md:w-20 md:h-20 object-contain shrink-0"
    />
    <p className="text-gray-800 font-medium text-sm sm:text-base">
      Proven geological expertise
    </p>
  </div>

  {/* Card 2 */}
  <div
    className={`
      bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md
      flex items-center gap-4
      transition-all duration-700 ease-out hover:shadow-xl hover:scale-105
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
    `}
    style={{ transitionDelay: "650ms" }}
  >
    <img
      src="/brbExploration/Sustainable mining practices.webp"
      alt="Sustainable"
      className="w-15 h-15 md:w-20 md:h-20  object-contain shrink-0"
    />
    <p className="text-gray-800 font-medium text-sm sm:text-base">
      Sustainable mining practices
    </p>
  </div>

  {/* Card 3 */}
  <div
    className={`
      bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md
      flex items-center gap-4
      transition-all duration-700 ease-out hover:shadow-xl hover:scale-105
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
    `}
    style={{ transitionDelay: "800ms" }}
  >
    <img
      src="/brbExploration/Reliable supply & transparent operations.webp"
      alt="Supply"
      className="w-15 h-15 md:w-20 md:h-20 object-contain shrink-0"
    />
    <p className="text-gray-800 font-medium text-sm sm:text-base">
      Reliable supply & transparent operations
    </p>
  </div>

  {/* Card 4 */}
  <div
    className={`
      bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md
      flex items-center gap-4
      sm:col-span-2 md:col-span-1
      transition-all duration-700 ease-out hover:shadow-xl hover:scale-105
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
    `}
    style={{ transitionDelay: "950ms" }}
  >
    <img
      src="/brbExploration/Part of BRB Group.webp"
      alt="BRB Group"
      className="w-15 h-15 md:w-20 md:h-20 object-contain shrink-0"
    />
    <p className="text-gray-800 font-medium text-sm sm:text-base">
      Part of the trusted BRB Group
    </p>
  </div>

</div>

    </section>
    </div>
  );
}
