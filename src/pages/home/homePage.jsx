import { Suspense, lazy } from "react";

// Lazy import for all sections
const HeroSection = lazy(() => import("../../pages/home/components/HeroSection"));
const OurOperationsSection = lazy(() => import("../../pages/home/components/OurOperationsSection"));
const BannerSection = lazy(() => import("./components/BannerSection"));
const LegacySection = lazy(() => import("./components/LegacySection"));
const MineralsPortfolioSection = lazy(() => import("./components/MineralsPortfolioSection"));
const SustainabilitySection = lazy(() => import("./components/SustainabilitySection"));
const TrustedPartnerSection = lazy(() => import("./components/TrustedPartnerSection"));
const WhatDrivesUsSection = lazy(() => import("./components/WhatDrivesUsSection"));
const WhyChooseSection = lazy(() => import("./components/WhyChooseSection"));

const HomePage = () => {
  return (
    <div>
      <Suspense fallback={<div className="text-center text-white py-10">Loading...</div>}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div className="h-20" />}>
        <OurOperationsSection />
      </Suspense>

      <Suspense fallback={<div className="h-20" />}>
        <LegacySection />
      </Suspense>

      <Suspense fallback={<div className="h-20" />}>
        <BannerSection />
      </Suspense>

      <Suspense fallback={<div className="h-20" />}>
        <SustainabilitySection />
      </Suspense>

      <Suspense fallback={<div className="h-20" />}>
        <WhyChooseSection />
      </Suspense>

      <Suspense fallback={<div className="h-20" />}>
        <TrustedPartnerSection />
      </Suspense>

      <Suspense fallback={<div className="h-20" />}>
        <MineralsPortfolioSection />
      </Suspense>

      <Suspense fallback={<div className="h-20" />}>
        <WhatDrivesUsSection />
      </Suspense>
    </div>
  );
};

export default HomePage;
