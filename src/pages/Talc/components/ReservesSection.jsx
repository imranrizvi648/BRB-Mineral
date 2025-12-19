import { useState, useEffect, useRef } from "react";

export default function Reserves() {
  // Animation states
  const [topVisible, setTopVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);

  const [talcTopVisible, setTalcTopVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [talcBannerVisible, setTalcBannerVisible] = useState(false);
  const [talcBgVisible, setTalcBgVisible] = useState(false);

  // Refs for BOTH sections
  const topRef = useRef(null);
  const bannerRef = useRef(null);
  const bgRef = useRef(null);

  const talcTopRef = useRef(null);
  const cardsRef = useRef(null);
  const talcBannerRef = useRef(null);
  const talcBgRef = useRef(null);

  // Reusable Observer
  const useObserver = (ref, setState) => {
    useEffect(() => {
      const obs = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setState(true),
        { threshold: 0.2 }
      );
      if (ref.current) obs.observe(ref.current);
      return () => obs.disconnect();
    }, []);
  };

  // Apply observers
  useObserver(topRef, setTopVisible);
  useObserver(bannerRef, setBannerVisible);
  useObserver(bgRef, setBgVisible);

  useObserver(talcTopRef, setTalcTopVisible);
  useObserver(cardsRef, setCardsVisible);
  useObserver(talcBannerRef, setTalcBannerVisible);
  useObserver(talcBgRef, setTalcBgVisible);

  // Items
  const items = [
    {
      title: "Cosmetics & Personal Care",
      desc: "Widely used in face powders, body care products, and as a filler due to its softness and absorbent properties.",
      img: "/TalcPage/Cosmetics & Personal Care.webp",
    },
    {
      title: "Ceramics",
      desc: "Improves thermal resistance and enhances the smooth finish of ceramic products.",
      img: "/TalcPage/ceramics.webp",
    },
    {
      title: "Pharmaceuticals",
      desc: "Used as a binding agent and filler in tablets, as well as in medical coatings.",
      img: "/TalcPage/Pharmaceuticals.webp",
    },
    {
      title: "Paints & Coatings",
      desc: "Provides smoothness, brightness, and durability",
      img: "/TalcPage/paints and coating (1).webp",
    },
    {
      title: "Paper Industry",
      desc: "Improves paper smoothness, printability, and opacity.",
      img: "/TalcPage/paper-industry.webp",
    },
    {
      title: "Plastics & Rubber",
      desc: "Adds strength, improves processing, and reduces production costs.",
      img: "/TalcPage/rubber and plastic (1).webp",
    },
  ];

  return (
    <>
     
      <section
        ref={talcTopRef}
        className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-14 bg-[#F4F7F6]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div
            className={`
              relative flex justify-center order-1
              transition-all duration-1000 ease-out
              ${talcTopVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
            `}
          >
            <img
              src="/BRB LOGO PNG black.png"
              alt="badge"
              className="absolute left-4 top-4 w-16 sm:w-20 md:w-28 bg-white p-2 sm:p-3 rounded shadow-md z-20"
            />

            <img
              src="/TalcPage/talc-img (2).webp"
              alt="talc"
              className="
                w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                rounded-xl shadow-lg object-cover
                h-[280px] sm:h-[320px] md:h-[360px]
              "
            />
          </div>

          {/* RIGHT TEXT */}
          <div
            className={`
              text-center md:text-left order-2
              transition-all duration-1000 ease-out delay-200
              ${talcTopVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
            `}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug mb-4">
              <span className="text-[#03A2A7]">Talc Reserves in</span> Pakistan
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 max-w-lg mx-auto md:mx-0">
              The Khyber Pakhtunkhwa region—particularly in Swat, Shangla, and Abbottabad—
              hosts extensive talc deposits of exceptional commercial value.
            </p>

            
          </div>
        </div>
      </section>

      {/* -------------------- CARDS SECTION -------------------- */}
      <section
        ref={cardsRef}
        className={`
          w-full px-4 sm:px-8 md:px-14 py-10 md:py-16
          transition-all duration-1000 ease-out
          ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-4xl md:text-[48px] font-extrabold mb-3">
            <span className="text-[#03A2A7]">Key Applications of</span> Talc
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
            The talc deposits found in Pakistan stand out due to their:
          </p>
        </div>

        {/* Cards Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className="
                bg-white p-4 sm:p-6 rounded-2xl border border-gray-200
                shadow-xl hover:shadow-2xl transition duration-300
                flex flex-col items-center text-center py-8 sm:py-10
              "
            >
              <img src={item.img} className="w-14 h-14 sm:w-20 sm:h-20 object-contain mb-4" />
              <h3 className="text-lg sm:text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xs sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Cards Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10 gap-6">
          <div className="hidden md:block"></div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-2xl border-gray-200 shadow-xl flex flex-col items-center text-center py-10">
            <img src={items[4].img} className="w-16 h-16 object-contain mb-4" />
            <h3 className="text-xl font-bold mb-2">{items[4].title}</h3>
            <p className="text-gray-600 text-sm">{items[4].desc}</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-2xl border-gray-200 shadow-xl flex flex-col items-center text-center py-10">
            <img src={items[5].img} className="w-16 h-16 object-contain mb-4" />
            <h3 className="text-xl font-bold mb-2">{items[5].title}</h3>
            <p className="text-gray-600 text-sm">{items[5].desc}</p>
          </div>

          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* -------------------- TALC BANNER -------------------- */}
      <section
        ref={talcBannerRef}
        className={`
          relative mx-auto w-full md:w-[92%] md:h-[200px] h-auto rounded-xl mt-12 sm:mt-14 md:mt-30 md:mb-20 overflow-hidden
          ${talcBannerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <img src="/flouritePage/natural resouse.webp" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col  items-center justify-center  gap-3 sm:gap-4 md:gap-6 px-4 sm:px-8 md:px-14 text-center md:text-center">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold md:leading-12">
            Transforming Natural Resources into <br /> Global Opportunities.
          </h2>

        </div>
      </section>

      {/* -------------------- TALC BACKGROUND SECTION -------------------- */}
      <section
        ref={talcBgRef}
        className={`
          relative w-full h-[55vh] sm:h-[60vh] md:h-[70vh] bg-center bg-cover bg-no-repeat mt-12
          transition-all duration-1000 ease-out
          ${talcBgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        style={{ backgroundImage: "url('/phosphatePage/quality-con.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Driving Growth Through Talc
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            As the demand for high-purity talc continues to rise,
            Pakistan is positioned to become a major global supplier—enabling industrial
            development and economic strength.
          </p>
        </div>
      </section>
    </>
  );
}
