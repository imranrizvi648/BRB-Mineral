import { useState, useEffect, useRef } from "react";

export default function Reserves() {
  // Animation visibility states
  const [topVisible, setTopVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);

  // Section refs
  const topRef = useRef(null);
  const bannerRef = useRef(null);
  const bgRef = useRef(null);

  // OBSERVER FOR TOP SECTION
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setTopVisible(true),
      { threshold: 0.2 }
    );
    if (topRef.current) obs.observe(topRef.current);
    return () => obs.disconnect();
  }, []);

  // OBSERVER FOR BANNER
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setBannerVisible(true),
      { threshold: 0.2 }
    );
    if (bannerRef.current) obs.observe(bannerRef.current);
    return () => obs.disconnect();
  }, []);

  // OBSERVER FOR BACKGROUND SECTION
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setBgVisible(true),
      { threshold: 0.2 }
    );
    if (bgRef.current) obs.observe(bgRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* TOP SECTION */}
      <section
        ref={topRef}
        className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-14 bg-[#F4F7F6]"
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
              className="absolute left-3 top-3 w-16 sm:w-20 md:w-28 bg-white p-2 sm:p-3 rounded shadow-md z-20"
            />

            <img
              src="/phosphatePage/phosphate-img.jpg"
              alt="phosphate"
              className="
                w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
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
              <span className="text-[#03A2A7]">Pakistan’s Phosphate</span> Reserves
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 max-w-lg mx-auto md:mx-0">
              Pakistan is endowed with abundant phosphate deposits, particularly
              in the mineral-rich belts of Hazara, Kakul, and Balochistan.
              These reserves hold tremendous promise not only for meeting
              domestic agricultural needs but also for positioning Pakistan as a
              competitive exporter in the global phosphate market.
            </p>

            {/* <button className="bg-[#03A2A7] hover:bg-[#3F4047] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition">
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

          <div className="absolute inset-0 flex flex-col  items-center justify-center  gap-3 sm:gap-4 md:gap-6 px-4 sm:px-8 md:px-14 text-center md:text-center">
            <h2
              className={`
                text-white text-lg sm:text-xl md:text-3xl font-bold max-w-xl leading-snug
                transition-all duration-1000 ease-out md:leading-12
                ${bannerVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}
              `}
            >
              Transforming Natural Resources into <br className="hidden sm:block" />
              Global Opportunities.
            </h2>

           
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
        style={{ backgroundImage: "url('/phosphatePage/quality-con.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-8">
          <h1
            className={`
              text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-5
              transition-all duration-1000 ease-out
              ${bgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            Driving Agricultural & Economic Growth
          </h1>

          <p
            className={`
              text-xs sm:text-sm md:text-lg max-w-2xl
              transition-all duration-1000 ease-out delay-300
              ${bgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            With a growing population and rising demand for food,
            Pakistan’s need for phosphate-based fertilizers is greater than ever…
          </p>
        </div>
      </section>
    </>
  );
}
