import { useState, useEffect, useRef } from 'react';

export default function WhatDrivesUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const items = [
    {
      title: "Integrity",
      desc: "Building trust through transparency.",
      icon: "/WhatDrivesUsSection/integrity.webp",
    },
    {
      title: "Reliability",
      desc: "Delivering what we promise, every time.",
      icon: "/WhatDrivesUsSection/relibility.webp",
    },
    {
      title: "Innovation",
      desc: "Leveraging modern processes for superior outcomes.",
      icon: "/WhatDrivesUsSection/innovation.webp",
    },
    {
      title: "Sustainability",
      desc: "Ensuring responsible sourcing for a better tomorrow.",
      icon: "/WhatDrivesUsSection/sustainbility.webp",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="md:py-24 bg-[#F4F7F6]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="md:flex justify-center items-center">

          {/* LEFT IMAGE */}
          <div
            className={`
              hidden lg:flex justify-center
              transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-20'}
            `}
          >
            <img
              src="/WhatDrivesUsSection/handshake.webp"
              alt="What Drives Us"
              className="rounded-2xl shadow-xl w-100 h-130 max-w-md object-cover"
            />
          </div>

          {/* RIGHT CARDS + HEADING */}
          <div
            className={`
              w-full lg:w-auto sm:item-center lg:mt-0
              transition-all duration-1000 ease-out delay-200
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
            `}
          >

            {/* Heading */}
            <h1 className="
              text-[32px] 
              sm:text-[40px]
              sm:text-center
              lg:text-[48px] 
              font-bold 
              pl-0 lg:pl-10 
              pb-4
            ">
              <span className="text-[#03A2A7]">What Drives </span> us
            </h1>

            {/* Cards Grid */}
            <div
              className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                gap-6 sm:gap-8 
                pl-0 ml-0 
                lg:-ml-20 lg:-pl-20
              "
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`
                    bg-white rounded-2xl 
                    p-6 
                    shadow-md 
                    text-center 
                    hover:shadow-lg 
                    transition-all duration-700 ease-out hover:scale-105
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  `}
                  style={{
                    transitionDelay: `${400 + index * 150}ms`
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-16 mx-auto mb-5"
                  />

                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
