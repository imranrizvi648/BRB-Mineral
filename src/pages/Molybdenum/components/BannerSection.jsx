import { useState, useEffect, useRef } from 'react';

export default function BannerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative mx-auto w-full 
        h-[200px] sm:h-[300px] md:h-[360px] 
         
        overflow-hidden 
        mt-12 md:mt-16 mb-16
      "
    >
      {/* Background Image */}
      <img
        src="/molybdenum/shortBanner.webp"
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div
        className="
          absolute inset-0 
          flex flex-col md:flex-row 
          items-center md:items-center 
          justify-center 
          text-center 
          px-6 md:px-14
          gap-4 md:gap-0
        "
      >
       
        <h2
          className={`
            text-white 
            text-lg sm:text-xl md:text-4xl 
            font-bold 
            leading-7 md:leading-16
            transition-all duration-1000 ease-out
            ${isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-20'
            }
          `}
        >
          BRB Exploration<br/> 
          Pakistan’s Source for Strength, Innovation, and Strategic Metals
        </h2>

      </div>
    </section>
  );
}