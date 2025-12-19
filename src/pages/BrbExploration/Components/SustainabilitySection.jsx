import { useState, useEffect, useRef } from 'react';

export default function SustainabilitySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);
  const sectionRef = useRef(null);
  const bottomRef = useRef(null);

  const cardData = [
    {
      title: "Environmental Responsibility",
      text: "BRB Exploration is committed to eco-friendly mining. We work to reduce land disturbance, manage water responsibly, reclaim mined areas, and minimize emissions.",
    },
    {
      title: "Community Engagement",
      text: "We collaborate with local communities to create jobs, support development, and ensure responsible land use.",
    },
    {
      title: "Ethical Mining Standards",
      text: "Compliance with local and international mining regulations is central to our operations.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBottomVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full py-14 md:py-20 px-6 md:px-14 ">
      
      {/* Heading */}
      <div 
        ref={sectionRef}
        className={`
          text-center mb-14
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
        `}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-snug">
          <span className="text-[#03A2A7]">Sustainability </span>First
        </h2>
       
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Our commitment to protecting the planet guides every step of our journey—from mines to markets.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`
              bg-gradient-to-r
              from-[#2EA383]
              to-[#157196]
              text-white
              rounded-2xl
              py-8 md:py-12
              px-6 md:px-8
              shadow-xl
              flex flex-col
              transition-all duration-700 ease-out hover:scale-105
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{
              transitionDelay: `${300 + index * 150}ms`
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      

    </section>
  );
}