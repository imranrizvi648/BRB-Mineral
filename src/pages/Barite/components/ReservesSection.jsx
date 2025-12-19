import { useState, useEffect, useRef } from "react";

export default function Reserves() {
  // ANIMATION STATES
  const [topVisible, setTopVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);

  // REFS
  const topRef = useRef(null);
  const bannerRef = useRef(null);
  const bgRef = useRef(null);

  // OBSERVER 1 — TOP SECTION
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setTopVisible(true),
      { threshold: 0.2 }
    );
    if (topRef.current) obs.observe(topRef.current);
    return () => topRef.current && obs.unobserve(topRef.current);
  }, []);

  // OBSERVER 2 — BANNER
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setBannerVisible(true),
      { threshold: 0.2 }
    );
    if (bannerRef.current) obs.observe(bannerRef.current);
    return () => bannerRef.current && obs.unobserve(bannerRef.current);
  }, []);

  // OBSERVER 3 — BG SECTION
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setBgVisible(true),
      { threshold: 0.2 }
    );
    if (bgRef.current) obs.observe(bgRef.current);
    return () => bgRef.current && obs.unobserve(bgRef.current);
  }, []);

  return (
    <>
      {/* MAIN WRAPPER */}
      <section
        ref={topRef}
        className="w-full py-12 sm:py-16 md:py-25  px-4 sm:px-8 md:px-14 bg-[#F4F7F6]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT — IMAGE */}
          <div
            className={`
              relative flex justify-center order-1
              transition-all duration-1000 ease-out
              ${topVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
            `}
          >
            <img
              src="/BRB LOGO PNG black.png"
              alt="small badge"
              className="
                absolute left-3 top-3 
                w-16 sm:w-20 md:w-28 
                bg-white p-2 sm:p-3 
                rounded shadow-md z-20
              "
            />

            <img
              src="/baritePage/barite (1).webp"
              alt="barite"
              className="
                w-full 
                max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                rounded-xl shadow-lg object-cover 
                h-[280px] sm:h-[320px] md:h-[360px]
              "
            />
          </div>

          {/* RIGHT — TEXT */}
          <div
            className={`
              text-center md:text-left order-2 
              transition-all duration-1000 ease-out delay-200
              ${topVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
            `}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug mb-4">
              <span className="text-[#03A2A7]">Barite Reserves in</span> Pakistan
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 max-w-lg mx-auto md:mx-0">
              Pakistan is richly endowed with abundant barite deposits,
              particularly in:
            </p>

            <ul className="text-gray-900 text-sm sm:text-base md:text-lg mb-6 space-y-2 max-w-lg mx-auto md:mx-0">
              <li>- Khyber Pakhtunkhwa (Kohat, Hazara, and surrounding areas)</li>
              <li>- Balochistan (Chagai and Khuzdar regions)</li>
            </ul>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 max-w-lg mx-auto md:mx-0">
              These reserves are of high commercial value, with the potential to
              meet both domestic industrial requirements and a growing global demand.
            </p>

            {/* <button
              className="
                bg-[#03A2A7] hover:bg-[#3F4047]
                text-white px-6 sm:px-8 py-2.5 sm:py-3
                rounded-lg font-semibold text-sm sm:text-base
                transition
              "
            >
              Discover more
            </button> */}
          </div>
        </div>

        {/* BANNER SECTION */}
        <section
          ref={bannerRef}
          className="relative mx-auto w-full md:h-[200px] h-auto rounded-xl mt-12 sm:mt-14 md:mt-30 overflow-hidden"
        >
          <img
            src="/flouritePage/natural resouse.webp"
            alt="banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

          {/* CONTENT */}
          <div
            className="
             absolute inset-0 flex flex-col  items-center justify-center  gap-3 sm:gap-4 md:gap-6 px-4 sm:px-8 md:px-14 text-center md:text-center
            "
          >
            {/* HEADING */}
            <h2
              className={`
                text-white 
                text-lg sm:text-xl md:text-3xl 
                font-bold max-w-xl md:leading-12
                transition-all duration-1000 ease-out
                ${bannerVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
              `}
            >
              Transforming Natural Resources into <br className="hidden sm:block" />
              Global Opportunities.
            </h2>

            {/* BUTTON */}
            {/* <button
              className={`
                bg-[#03A2A7] hover:bg-[#3F4047]
                text-white 
                px-4 py-2 sm:px-5 sm:py-2 md:px-8 md:py-3 
                rounded-lg 
                text-[11px] sm:text-[12px] md:text-[14px]
                font-medium md:font-semibold 
                transition-all duration-1000 delay-200
                ${bannerVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
              `}
            >
              Learn More
            </button> */}
          </div>
        </section>
      </section>

      {/* BACKGROUND SECTION */}
      <section
        ref={bgRef}
        className="
          relative w-full 
          h-[55vh] sm:h-[60vh] md:h-[70vh]
          bg-center bg-cover bg-no-repeat
          mt-10
        "
        style={{
          backgroundImage: "url('/baritePage/industrial-growth (1).webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div
          className="
            relative z-10 
            flex flex-col items-center justify-center 
            h-full text-white text-center px-4 sm:px-8
          "
        >
          <h1
            className={`
              text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-5
              transition-all duration-1000 ease-out
              ${bgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            A Path to Industrial Growth
          </h1>

          <p
            className={`
              text-xs sm:text-sm md:text-lg max-w-2xl
              transition-all duration-1000 ease-out delay-300
              ${bgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            With rising global demand, especially from the oil and gas sector,
            barite presents Pakistan with an excellent opportunity to strengthen
            its industrial base and export economy. Strategic investments in
            this sector can make Pakistan a key player in the international barite
            market, while supporting domestic industries and contributing to sustainable growth.
          </p>
        </div>
      </section>
    </>
  );
}
