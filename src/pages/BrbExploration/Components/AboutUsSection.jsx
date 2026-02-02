import React, { useState } from "react";
import {
  Mountain,
  Target,
  Eye,
  Shield,
  Sparkles,
  Users,
  Leaf,
  TrendingUp,
  Award,
} from "lucide-react";

export default function AboutSection() {
  const [hoveredValue, setHoveredValue] = useState(null);

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      desc: "Prioritizing the wellbeing of our team and communities",
      color: "from-[#2EA383] to-[#157196]",
    },
    {
      icon: Award,
      title: "Transparency & Ethics",
      desc: "Operating with integrity in all our dealings",
      color: "from-[#966928] to-[#FDD95F]",
    },
    {
      icon: Sparkles,
      title: "Innovation in Mining",
      desc: "Leveraging cutting-edge technology for efficiency",
      color: "from-[#2EA383] to-[#157196]",
    },
    {
      icon: Leaf,
      title: "Sustainable Development",
      desc: "Balancing growth with environmental responsibility",
      color: "from-[#966928] to-[#FDD95F]",
    },
    {
      icon: Users,
      title: "Community Partnership",
      desc: "Building lasting relationships with local communities",
      color: "from-[#2EA383] to-[#157196]",
    },
  ];

  return (
    <div className="min-h-screen  text-gray-900 px-4 sm:px-6 md:px-10 lg:px-14 py-12 md:mt-10">
      <div className="max-w-7xl mx-auto">

       
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-linear-to-r from-yellow-400/10 via-orange-400/10 to-amber-400/10 blur-3xl -z-10"></div>

          <h1 className="text-3xl md:text-5xl   font-extrabold  mb-4 text-black leading-tight">
            <span className="text-[#03A2A7]">About BRB</span> Exploration
          </h1>

         
          <p className="text-gray-600 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The mineral exploration and extraction arm of BRB Group
          </p>
        </div>

        {/* ---------------- COMPANY OVERVIEW ---------------- */}
        <div className="bg-gray-50 p-6 sm:p-8 md:p-10 mb-12 border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
            <TrendingUp className="w-7 sm:w-8 h-7 sm:h-8 text-blue-500" />
            Company Overview
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            BRB Exploration stands at the forefront of mineral exploration and extraction,
            meeting the growing global demand for high-quality minerals and metals. Our operations include exploration, resource assessment, extraction, and supply of{" "}
            <span className="text-yellow-600 font-semibold">placer gold</span>{" "}
            and{" "}
            <span className="text-gray-800 font-semibold">heavy black sand</span>.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We leverage cutting-edge technologies and a highly experienced mining team to ensure operational efficiency while maintaining environmental responsibility.
          </p>
        </div>

        {/* ---------------- MISSION & VISION ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* Mission */}
          <div className="group bg-linear-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-blue-200 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-linear-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                <Target className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-base md:text-lgleading-relaxed">
              To responsibly explore, develop, and supply mineral resources that contribute to industrial growth and sustainable development.
            </p>
          </div>

          {/* Vision */}
          <div className="group bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-purple-200 hover:border-[#AA7E2C] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-linear-to-br from-[#966928] to-[#FDD95F] p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                <Eye className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-base md:text-lgleading-relaxed">
              To be a leading mineral exploration company recognized for excellence, integrity, and environmental stewardship.
            </p>
          </div>
        </div>

        {/* ---------------- CORE VALUES ---------------- */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Our Core <span className="text-[#03A2A7]">Values</span>
          </h2>

          <p className="text-centertext-gray-600  md:text-lg mb-12 text-base sm:text-lg item-center text-center">
            The principles that guide everything we do
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                  className="group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#03A2A7] transition-all duration-500 cursor-pointer hover:-translate-y-3 hover:shadow-2xl"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                  ></div>

                  <div
                    className={`bg-linear-to-br ${value.color} p-4 rounded-xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform shadow-md`}
                  >
                    <Icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-center mb-2 text-gray-900">
                    {value.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm text-gray-600 text-center transition-all duration-300 ${
                      hoveredValue === index ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

       {/* ---------------- CTA SECTION ---------------- */}
<div className="relative overflow-hidden rounded-3xl group">
  {/* Background Image Container */}
  <div 
    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
    style={{ 
      backgroundImage: `url('/path-to-your-image.jpg')`, // Apni image ka path yahan dalein
    }}
  />

  {/* Dark Overlay (Taake text saaf nazar aaye) */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

  {/* Content */}
  <div className="relative z-10 text-center p-12 sm:p-20 flex flex-col items-center justify-center min-h-[300px]">
    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white leading-tight">
      Part of <span className="text-[#03A2A7]">BRB Group</span>
    </h3>

    <p className="text-gray-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
      As a subsidiary of BRB Group, we benefit from strong corporate governance, 
      financial stability, and long-term success across all sectors.
    </p>

    {/* Optional: Add a subtle border or glass effect button if needed */}
    <div className="mt-8 h-1 w-20 bg-[#03A2A7] rounded-full" />
  </div>
</div>

      </div>
    </div>
  );
}
