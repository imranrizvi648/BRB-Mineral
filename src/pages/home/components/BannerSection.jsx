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
        relative mx-auto w-[93%] 
        h-[120px] sm:h-[150px] md:h-[260px] 
        rounded-xl 
        overflow-hidden 
        mt-12 md:mt-16 mb-16
      "
    >
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div
        className="
          absolute inset-0 
          flex flex-col md:flex-row 
          items-center md:items-center 
          justify-center md:justify-between 
          text-center md:text-left
          px-6 md:px-14
          gap-4 md:gap-0
        "
      >
        {/* LEFT TEXT */}
        <h2
          className={`
            text-white 
            text-lg sm:text-xl md:text-3xl 
            font-bold 
            leading-snug
            transition-all duration-1000 ease-out
            ${isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-20'
            }
          `}
        >
          Transforming Natural Resources into <br className="hidden md:block" />
          Global Opportunities.
        </h2>

        {/* RIGHT BUTTON */}
        <button
          className={`
            bg-[#03A2A7] hover:bg-[#02848a]
            text-white
            px-5 sm:px-6 md:px-8
            py-2 sm:py-3
            rounded-lg
            font-semibold
            transition-all duration-1000 ease-out hover:scale-105 active:scale-95
            ${isVisible 
              ? 'opacity-100 translate-x-0 delay-200' 
              : 'opacity-0 translate-x-20'
            }
          `}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}