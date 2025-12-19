import { useState, useEffect, useRef } from "react";

export default function Reserves() {
  const [topVisible, setTopVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);

  const topRef = useRef(null);
  const bannerRef = useRef(null);
  const bgRef = useRef(null);

  // OBSERVER 1 – TOP SECTION
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setTopVisible(true),
      { threshold: 0.2 }
    );
    if (topRef.current) obs.observe(topRef.current);
    return () => topRef.current && obs.unobserve(topRef.current);
  }, []);

  // OBSERVER 2 – BANNER
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setBannerVisible(true),
      { threshold: 0.2 }
    );
    if (bannerRef.current) obs.observe(bannerRef.current);
    return () => bannerRef.current && obs.unobserve(bannerRef.current);
  }, []);

  // OBSERVER 3 – BACKGROUND
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
      {/* MAIN SECTION */}
      <section
        ref={topRef}
        className="w-full py-14 md:py-20 px-4 sm:px-8 lg:px-14 bg-[#F4F7F6]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT — IMAGE */}
          <div
            className={`
              relative flex justify-center
              transition-all duration-1000 ease-out
              ${topVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
            `}
          >
            <img
              src="/BRB LOGO PNG black.png"
              alt="small badge"
              className="
                absolute left-4 top-4 
                w-16 sm:w-20 md:w-24 
                bg-white p-2 sm:p-3 rounded shadow-lg z-20
              "
            />

            <img
              src="/BauxitePage/bauxide (1).webp"
              alt="fluorite"
              className="
                w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
                rounded-xl shadow-xl object-cover 
                h-[280px] sm:h-[320px] md:h-[360px]
              "
            />
          </div>

          {/* RIGHT — TEXT */}
          <div
            className={`
              text-center md:text-left
              transition-all duration-1000 ease-out delay-200
              ${topVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
            `}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug mb-4">
              <span className="text-[#03A2A7]">Bauxite Reserves in</span> Pakistan
            </h2>

            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              Pakistan holds significant reserves of bauxite, mainly in
              Balochistan, with additional deposits in Punjab and Khyber
              Pakhtunkhwa. These resources position Pakistan to meet local
              demand and potentially enter the global aluminum market.
            </p>

            {/* <button
              className="
                bg-[#03A2A7] hover:bg-[#3F4047]
                text-white px-7 sm:px-10 py-3 rounded-lg 
                font-semibold text-sm sm:text-base
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

          <div className="absolute inset-0 bg-black/50"></div>

          <div
            className="
              absolute inset-0 flex flex-col  items-center justify-center  gap-3 sm:gap-4 md:gap-6 px-4 sm:px-8 md:px-14 text-center md:text-center
            "
          >
            <h2
              className={`
                text-white 
                text-lg sm:text-xl md:text-3xl font-bold max-w-xl
                transition-all duration-1000 ease-out md:leading-12
                ${bannerVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}
              `}
            >
              Transforming Natural Resources into <br /> Global Opportunities.
            </h2>

            {/* <button
              className={`
                bg-[#03A2A7] hover:bg-[#3F4047]
                text-white 
                px-4 py-2 sm:px-5 sm:py-2 md:px-8 md:py-3 
                rounded-lg 
                text-[11px] sm:text-[12px] md:text-[14px]
                font-medium md:font-semibold 
                transition-all duration-1000 delay-200
                ${bannerVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}
              `}
            >
              Learn More
            </button> */}
          </div>
        </section>
      </section>

      {/* BACKGROUND IMAGE SECTION */}
      <section
        ref={bgRef}
        className="
          relative w-full
          h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh]
          bg-center bg-cover bg-no-repeat
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
            text-white text-center px-4 
            h-full
          "
        >
          <h1
            className={`
              text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6
              transition-all duration-1000 ease-out
              ${bgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            A Resource for Industrial Growth
          </h1>

          <p
            className={`
              text-sm sm:text-base md:text-lg max-w-2xl
              transition-all duration-1000 ease-out delay-300
              ${bgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            As global demand for aluminum rises—driven by construction,
            transportation, and energy sectors—Pakistan’s bauxite reserves offer
            a major opportunity for sustainable industrial expansion and
            economic development.
          </p>
        </div>
      </section>
    </>
  );
}
