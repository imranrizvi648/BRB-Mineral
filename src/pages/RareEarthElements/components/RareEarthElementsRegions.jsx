import { MapPin } from "lucide-react";

export default function RareEarthElementsRegions({
  regions,
  activeRegion,
  setActiveRegion,
}) {
  return (
  <div className="bg-linear-to-br from-gray-50 to-blue-50 py-12 sm:py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-10 text-gray-900 leading-10">
           Pakistan’s Rare Earth Elements <span className="text-[#03A2A7]">Resource Landscape </span> 
        </h2>

        <p className="text-center text-gray-600 text-base sm:text-lg md:text-lg max-w-3xl mx-auto mb-10 md:mb-12">
          These regions provide a strong foundation for rare earth exploration
          and long-term development.Pakistan hosts a variety of mineralized
          zones with proven or promising REE occurrences. Notable regions
          include:
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {regions.map((region, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveRegion(index)}
              onMouseLeave={() => setActiveRegion(null)}
              className="
                group relative bg-white rounded-2xl 
                p-6 sm:p-7 md:p-8 
                border-2 border-gray-200 
                hover:border-[#03A2A7] 
                transition-all duration-500 
                hover:shadow-2xl hover:-translate-y-2
                cursor-pointer overflow-hidden
              "
            >
              {/* Soft Background Hover Gradient */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${region.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`bg-linear-to-br ${region.color} p-3 sm:p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {region.name}
                  </h3>
                </div>

                {/* Areas */}
                <p className="text-[#03A2A7] font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                  {region.minerals}
                </p>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {region.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
