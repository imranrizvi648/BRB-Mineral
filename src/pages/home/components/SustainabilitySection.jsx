import { useState, useEffect, useRef } from 'react';

export default function SustainabilitySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);
  const sectionRef = useRef(null);
  const bottomRef = useRef(null);

  const cardData = [
    {
      title: "Environmental Protection",
      text: "We adopt innovative, eco-friendly extraction and processing techniques to safeguard nature and reduce our footprint.",
    },
    {
      title: "Sustainable Practices",
      text: "Our operations prioritize renewable resources, responsible land use, and long-term environmental balance.",
    },
    {
      title: "Community Well-Being",
      text: "We invest in community health, education, and welfare, ensuring shared prosperity and sustainable growth.",
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
    <section className="w-full py-14 md:py-20 px-6 md:px-14 bg-[#EAEFF3]">
      
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

        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Our commitment to protecting the planet guides every step of our journey—from mines to markets.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Final Paragraph + Button */}
      <div 
        ref={bottomRef}
        className="text-center max-w-3xl mx-auto mt-16 md:mt-24 px-2"
      >
        <h3 
          className={`
            text-3xl md:text-5xl font-extrabold mb-6 leading-snug
            transition-all duration-1000 ease-out
            ${bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <span className="text-[#03A2A7]">Building Stronger Futures,</span> Responsibly
        </h3>

        <p 
          className={`
            text-gray-600 text-base md:text-lg leading-relaxed mb-8
            transition-all duration-1000 ease-out delay-200
            ${bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          Our mission is to unlock the true potential of natural resources through sustainable mining.
          By delivering quality minerals, we empower industries, uplift communities, and create lasting
          value for generations to come. Trusted by our partners and stakeholders, we turn resources 
          into opportunities that drive progress.
        </p>

       <a href="https://brbgroup.org/cantact-us/">
  <button
    className={`
      bg-[#03A2A7] hover:bg-[#02848a]
      text-white
      px-8 md:px-12
      py-3 md:py-4
      rounded-lg
      font-semibold
      transition-all duration-300 hover:scale-105 active:scale-95
      ${bottomVisible ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-10'}
    `}
  >
    Contact Us
  </button>
</a>

      </div>

    </section>
  );
}