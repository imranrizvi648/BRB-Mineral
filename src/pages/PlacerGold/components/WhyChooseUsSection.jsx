export default function WhyChooseUsSection({ features }) {
  return (
    <div className="bg-linear-to-br from-blue-50 to-cyan-50 py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 lg:mb-8 text-gray-900">
          Why Choose <span className="text-[#03A2A7]">BRB Exploration</span>?
        </h2>

        <p className="text-center text-gray-600 mb-12 text-base sm:text-lg">
          Excellence in every aspect of placer gold production
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl p-8 border-2 border-gray-200
                hover:border-[#03A2A7]
                transition-all duration-500
                hover:shadow-2xl hover:-translate-y-2
                group text-center relative overflow-hidden
              "
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-linear-to-br from-[#2EA383]/5 to-[#157196]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Image Icon */}
                <div className="
                 
                  p-4 rounded-xl mb-4 mx-auto w-fit
                  group-hover:scale-110 group-hover:rotate-6
                  transition-all duration-300
                ">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-20 h-20 md:h-25 md:w-25 object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 -mt-6">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
