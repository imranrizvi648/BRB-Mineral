import React, { Suspense, lazy } from "react";

// Lazy Loading Components
const HeroSection = lazy(() => import("./components/HeroSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const ExpertiseSection = lazy(() => import("./components/ExpertiseSection"));
const ProductsSection = lazy(() => import("./components/ProductsSection"));
const OperationSection = lazy(() => import("./components/OperationsSection"));
const WhyChooseUsSection = lazy(() => import("./components/WhyChooseUsSection"));
const SustainabilitySection = lazy(() => import("./components/SustainabilitySection"));
const TechnologySection = lazy(() => import("./components/TechnologySection"));

export default function BrbMineralAndMetalPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>

      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <SustainabilitySection />
      <TechnologySection />

    </Suspense>
  );
}
