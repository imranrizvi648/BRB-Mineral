import { useState, useEffect, useRef } from "react";

export default function Reserves() {
  const [topVisible, setTopVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);

  const topRef = useRef(null);
  const bannerRef = useRef(null);
  const bgRef = useRef(null);

  // TOP OBSERVER
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setTopVisible(true),
      { threshold: 0.2 }
    );
    if (topRef.current) obs.observe(topRef.current);
    return () => topRef.current && obs.unobserve(topRef.current);
  }, []);

  // BANNER OBSERVER
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setBannerVisible(true),
      { threshold: 0.2 }
    );
    if (bannerRef.current) obs.observe(bannerRef.current);
    return () => bannerRef.current && obs.unobserve(bannerRef.current);
  }, []);

  // BACKGROUND OBSERVER
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
        className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-14 bg-[#F4F7F6]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div
            className={`
              relative flex justify-center order-1
              transition-all duration-1000 ease-out
              ${
                topVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }
            `}
          >
            <img
              src="/BRB LOGO PNG black.png"
              className="absolute left-4 top-4 w-16 sm:w-20 md:w-28 bg-white p-2 sm:p-3 rounded shadow-md z-20"
            />
            <img
              src="/IronPage/iron-ore-img.jpg"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg object-cover h-[280px] sm:h-[320px] md:h-[360px]"
            />
          </div>

          {/* RIGHT TEXT */}
          <div
            className={`
              text-center md:text-left order-2
              transition-all duration-1000 ease-out delay-200
              ${
                topVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }
            `}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
              <span className="text-[#03A2A7]">Key Deposits in</span> Pakistan
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 max-w-lg mx-auto md:mx-0">
              Pakistan hosts both sedimentary and magnetite iron ore deposits,
              concentrated in regions such as:
            </p>

            <ul className="space-y-2">
              <li className="text-gray-600 text-sm sm:text-base md:text-lg">
                <span className="text-gray-900 font-bold">
                  Hazara (Khyber Pakhtunkhwa)
                </span>{" "}
                — Known for sedimentary iron ores with high iron content.
              </li>

              <li className="text-gray-600 text-sm sm:text-base md:text-lg">
                <span className="text-gray-900 font-bold">Balochistan</span> —
                Rich in magnetite ores, ideal for large-scale industry.
              </li>

              <li className="text-gray-600 text-sm sm:text-base md:text-lg">
                Other potential areas include Punjab and Sindh.
              </li>
            </ul>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 mb-6">
              These reserves contain iron content (Fe) up to 60%, suitable for
              commercial steel production.
            </p>

            {/* <button className="bg-[#03A2A7] hover:bg-[#3F4047] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition">
              Discover more
            </button> */}
          </div>
        </div>

        {/* BANNER SECTION */}
        <section
          ref={bannerRef}
          className="relative mx-auto w-full h-auto md:h-[200px] rounded-xl mt-12 sm:mt-14 md:mt-30 overflow-hidden"
        >
          <img
            src="/flouritePage/natural resouse.webp"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col  items-center justify-center  gap-3 sm:gap-4 md:gap-6 px-4 sm:px-8 md:px-14 text-center md:text-center">
            <h2
              className={`
                text-white text-lg sm:text-xl md:text-3xl font-bold max-w-xl
                transition-all duration-1000 ease-out md:leading-12
                ${
                  bannerVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"
                }
              `}
            >
              Transforming Natural Resources into{" "}
              <br className="hidden sm:block" />
              Global Opportunities.
            </h2>

            {/* <button
              className={`
                bg-[#03A2A7] hover:bg-[#3F4047] text-white px-4 py-2 sm:px-5 md:px-8 rounded-lg text-sm md:text-base transition-all duration-1000 delay-200
                ${
                  bannerVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-16"
                }
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
        className="relative w-full h-[55vh] sm:h-[60vh] md:h-[70vh] bg-center bg-cover mt-10"
        style={{ backgroundImage: "url('/IronPage/industrial-growth.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1
            className={`
              text-2xl sm:text-3xl md:text-5xl font-bold mb-3
              transition-all duration-1000 ease-out
              ${
                bgVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
          >
            Unlocking the Future
          </h1>

          <p
            className={`
              text-xs sm:text-sm md:text-lg max-w-2xl
              transition-all duration-1000 ease-out delay-300
              ${
                bgVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
          >
            The global demand for steel is rising. By utilizing Pakistan’s iron
            ore reserves with advanced technology, the nation can transform this
            resource into a major economic strength.
          </p>
        </div>
      </section>
    </>
  );
}
