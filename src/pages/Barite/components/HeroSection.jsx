import { useEffect, useRef, useState } from "react";

export default function HeroSection() {


const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full 
        bg-gradient-to-br from-slate-50 via-white to-cyan-50
        px-6 md:px-14 py-10 md:py-16 md:pb-20 
        overflow-hidden
      "
    >
      {/* === STONE-THEMED ANIMATED BACKGROUND === */}

      {/* Falling Stones/Rocks */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div 
          className="absolute w-8 h-10 bg-gradient-to-br from-[#03A2A7] to-[#0c3c52] rounded-tl-3xl rounded-br-3xl"
          style={{ 
            top: '-50px',
            left: '15%',
            animation: 'fallStone 8s ease-in infinite',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
          }}
        ></div>
        <div 
          className="absolute w-6 h-8 bg-gradient-to-br from-[#0c3c52] to-[#03A2A7]"
          style={{ 
            top: '-60px',
            left: '35%',
            animation: 'fallStone 10s ease-in infinite 2s',
            clipPath: 'polygon(50% 0%, 100% 20%, 90% 70%, 50% 100%, 10% 70%, 0% 20%)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
          }}
        ></div>
        <div 
          className="absolute w-7 h-9 bg-gradient-to-br from-[#03A2A7] to-[#0c3c52]"
          style={{ 
            top: '-40px',
            left: '55%',
            animation: 'fallStone 12s ease-in infinite 4s',
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%'
          }}
        ></div>
        <div 
          className="absolute w-9 h-11 bg-gradient-to-br from-[#0c3c52] to-[#03A2A7]"
          style={{ 
            top: '-70px',
            left: '75%',
            animation: 'fallStone 9s ease-in infinite 1s',
            clipPath: 'polygon(40% 0%, 60% 0%, 100% 40%, 80% 100%, 20% 100%, 0% 40%)',
            borderRadius: '35% 65% 70% 30% / 35% 35% 65% 65%'
          }}
        ></div>
        <div 
          className="absolute w-5 h-7 bg-gradient-to-br from-[#03A2A7] to-[#0c3c52]"
          style={{ 
            top: '-55px',
            left: '85%',
            animation: 'fallStone 11s ease-in infinite 5s',
            clipPath: 'polygon(50% 0%, 90% 30%, 90% 70%, 50% 100%, 10% 70%, 10% 30%)',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
          }}
        ></div>
      </div>

      {/* Floating Stone Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-br from-[#03A2A7] to-[#0c3c52]"
            style={{
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatStone ${5 + Math.random() * 5}s ease-in-out infinite ${Math.random() * 5}s`,
              clipPath: 'polygon(50% 0%, 100% 35%, 80% 100%, 20% 100%, 0% 35%)',
              borderRadius: `${Math.random() * 50}% ${Math.random() * 50}% ${Math.random() * 50}% ${Math.random() * 50}%`
            }}
          ></div>
        ))}
      </div>

    

      {/* Stone Texture Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #03A2A7 1px, transparent 1px),
              radial-gradient(circle at 60% 70%, #0c3c52 1px, transparent 1px),
              radial-gradient(circle at 80% 20%, #03A2A7 1px, transparent 1px),
              radial-gradient(circle at 40% 80%, #0c3c52 1px, transparent 1px)
            `,
            backgroundSize: '150px 150px, 200px 200px, 180px 180px, 160px 160px',
            animation: 'moveTexture 40s linear infinite'
          }}
        ></div>
      </div>

      {/* Gemstone Facets */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div 
          className="absolute top-[15%] left-[20%] w-24 h-24 border-2 border-[#03A2A7]"
          style={{
            clipPath: 'polygon(50% 0%, 900% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            animation: 'rotateFacet 15s linear infinite'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#03A2A7] via-transparent to-[#0c3c52] opacity-30"></div>
        </div>
        <div 
          className="absolute bottom-[25%] right-[15%] w-28 h-28 border-2 border-[#0c3c52]"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            animation: 'rotateFacet 18s linear infinite reverse'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c3c52] via-transparent to-[#03A2A7] opacity-30"></div>
        </div>
        <div 
          className="absolute top-[60%] left-[60%] w-20 h-20 border-2 border-[#03A2A7]"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            animation: 'rotateFacet 12s linear infinite'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#03A2A7] via-transparent to-[#0c3c52] opacity-30"></div>
        </div>
      </div>

      {/* Stone Dust/Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              backgroundColor: i % 2 === 0 ? '#03A2A7' : '#0c3c52',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `drift ${8 + Math.random() * 8}s linear infinite ${Math.random() * 8}s`,
              opacity: 0.3
            }}
          ></div>
        ))}
      </div>

      {/* Gradient Orbs - Stone Deposits */}
      <div 
        className="absolute top-0 left-0 w-[380px] h-[380px] bg-gradient-to-br from-[#03A2A7] to-transparent opacity-10 rounded-full blur-3xl"
        style={{ animation: 'pulse 10s ease-in-out infinite' }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-[460px] h-[460px] bg-gradient-to-tl from-[#0c3c52] to-transparent opacity-10 rounded-full blur-3xl"
        style={{ animation: 'pulse 12s ease-in-out infinite 2s' }}
      ></div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fallStone {
          0% { transform: translateY(-50px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes floatStone {
          0%,100% { transform: translate(0,0) rotate(0deg); opacity:0.4; }
          25% { transform: translate(10px,-15px) rotate(90deg); opacity:0.7; }
          50% { transform: translate(-5px,-25px) rotate(180deg); opacity:1; }
          75% { transform: translate(15px,-15px) rotate(270deg); opacity:0.7; }
        }
        @keyframes stackStone {
          0% { transform: translateY(-100px) scale(0.5); opacity:0; }
          70% { transform: translateY(5px) scale(1.05); }
          100% { transform: translateY(0) scale(1); opacity:1; }
        }
        @keyframes moveTexture { 0%{transform:translate(0,0);} 100%{transform:translate(50px,50px);} }
        @keyframes rotateFacet { 0%{transform:rotate(0deg) scale(1);opacity:0.4;} 50%{transform:rotate(180deg) scale(1.1);opacity:0.7;} 100%{transform:rotate(360deg) scale(1);opacity:0.4;} }
        @keyframes drift { 0%{transform:translate(0,0);} 50%{transform:translate(30px,-20px);} 100%{transform:translate(60px,0);} }
        @keyframes pulse { 0%,100%{transform:scale(1);opacity:0.1;} 50%{transform:scale(1.1);opacity:0.15;} }
      `}</style>

      {/* === MAIN CONTENT === */}
      <div
        className="
          relative grid grid-cols-1 md:grid-cols-2 
          gap-10 items-center z-[2]
          md:max-w-[91%] mx-auto
        "
      >
        {/* LEFT TEXT */}
        <div
          className={`
            space-y-6 text-center md:text-left transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-30"}
          `}
        >
          <h1
            className="
              text-2xl sm:text-4xl md:text-5xl
              font-extrabold leading-tight
              text-[#03A2A7]
            "
          >
            Barite in Pakistan –  <br />
            <span className="text-gray-800">
            A Strategic Industrial Mineral
            </span>
          </h1>

          <p
            className="
              text-gray-700 text-base sm:text-lg
              leading-relaxed max-w-xl mx-auto md:mx-0
            "
          >
         Barite, a mineral composed of barium sulfate (BaSO₄), is one of
            Pakistan’s important industrial resources with extensive applications
          in global industries. Found mainly in Khyber Pakhtunkhwa and
            Balochistan, Pakistan’s barite reserves hold great promise for
            domestic utilization and international exports.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end relative md:mt-3">
          {/* Glow behind Img */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#03A2A7] to-[#0c3c52] opacity-20 blur-2xl rounded-xl scale-[1.1]"></div>

          {/* IMAGE WRAPPER */}
          <div className="relative">
            <img
              src="/baritePage/barite-1.webp"
              alt="Fluorite Visual"
              className={`
                relative w-[260px] sm:w-[320px] md:w-[450px]
                h-[220px] sm:h-[260px] md:h-[350px]
                rounded-xl object-cover shadow-2xl border-4 border-white
                transition-all duration-1000 ease-out delay-200
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
              `}
            />

            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#03A2A7] rounded-tl-lg"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#03A2A7] rounded-br-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
