import { useEffect, useRef, useState } from "react";

export default function LeadZincHero() {
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
      className="relative w-full bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 md:px-14 py-10 md:py-16 md:pb-20  overflow-hidden"
    >
      {/* Animated Geometric Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {/* Floating Hexagons */}
        <div className="absolute top-10 left-[10%] w-32 h-32 border-4 border-[#03A2A7] rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-40 left-[5%] w-20 h-20 border-2 border-[#0c3c52] rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-[15%] w-24 h-24 border-3 border-[#03A2A7] rotate-12" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        
        {/* Right side geometric shapes */}
        <div className="absolute top-20 right-[20%] w-40 h-40 border-4 border-[#03A2A7] opacity-20 rotate-12"></div>
        <div className="absolute top-60 right-[10%] w-28 h-28 bg-gradient-to-br from-[#03A2A7] to-transparent opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-[25%] w-36 h-36 border-2 border-[#0c3c52] rounded-lg -rotate-45 opacity-40"></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#03A2A7] to-transparent opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#0c3c52] to-transparent opacity-10 rounded-full blur-3xl"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-[#03A2A7] rounded-full animate-bounce" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
        <div className="absolute top-[40%] left-[60%] w-3 h-3 bg-[#0c3c52] rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-[#03A2A7] rounded-full animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}></div>
        <div className="absolute top-[30%] right-[25%] w-2 h-2 bg-[#03A2A7] rounded-full animate-bounce" style={{animationDuration: '4.5s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-[30%] right-[40%] w-3 h-3 bg-[#0c3c52] rounded-full animate-bounce" style={{animationDuration: '3.8s', animationDelay: '1.5s'}}></div>
      </div>

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #03A2A7 0px, #03A2A7 2px, transparent 2px, transparent 40px)',
        }}></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10 md:max-w-[90%] mx-auto">
        {/* LEFT SIDE TEXT */}
        <div
          className={`space-y-6 text-center md:text-left transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-30"
          }`}
        >
         

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#03A2A7] to-[#0c3c52] bg-clip-text text-transparent">
              Lead-Zinc in Pakistan
            </span>
            <br />
            <span className="text-gray-800 text-xl ">Reliable Base Metals from High-Grade Mineral Belts</span>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            BRB Exploration is committed to advancing lead and zinc resource
            development in Pakistan, a country with some of South Asia's most
            promising base-metal belts. As demand grows for batteries,
            galvanizing metals, and industrial alloys, Pakistan's Pb-Zn deposits
            offer strong potential for sustainable growth and long-term supply.
          </p>

          {/* Stats Row */}
         
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center md:justify-end relative">
          {/* Decorative Elements around image */}
          <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-[#03A2A7] rounded-full opacity-30 animate-spin" style={{animationDuration: '8s'}}></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#03A2A7] to-transparent opacity-40 rounded-lg rotate-45"></div>
          
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#03A2A7] to-[#0c3c52] opacity-20 blur-2xl rounded-2xl scale-105"></div>
            
            <img
              src="/leadZinc/main.webp"
              alt="Lead Zinc Visual"
              className={`relative w-[260px] sm:w-[320px] md:w-[400px] h-[220px] sm:h-[260px] md:h-[300px] rounded-2xl object-cover shadow-2xl border-4 border-white transition-all duration-1000 ease-out delay-200 ${
                isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-6"
              }`}
            />
            
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-[#03A2A7] rounded-tl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-[#03A2A7] rounded-br-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}