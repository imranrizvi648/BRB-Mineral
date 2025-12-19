import { CheckCircle, Award } from 'lucide-react';

export default function ProductsSection({ products }) {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="text-center mb-12">
        <div className="inline-block relative mb-6 lg:mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-[#03A2A7]">Products</span>
          </h2>
         
        </div>
        <p className="text-gray-700 text-base md:text-lg">Premium quality placer gold with full traceability</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-linear-to-br from-white to-yellow-50 rounded-xl p-6 border-2 border-gray-200 hover:border-[#966928] transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-[#FDD95F]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="flex items-start gap-3 relative z-10">
              <CheckCircle className="w-6 h-6 text-[#2EA383] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-linear-to-r from-[#2EA383]/10 to-[#157196]/10 rounded-2xl p-8 border-2 border-[#03A2A7]/30">
        <p className="text-center text-lg text-gray-800 font-medium flex items-center justify-center gap-3">
          <Award className="w-6 h-6 text-[#966928]" />
          Each batch is fully traceable, ensuring transparency and consistent quality
        </p>
      </div>
    </div>
  );
}
