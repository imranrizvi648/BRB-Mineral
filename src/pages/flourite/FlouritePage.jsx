import { Suspense, lazy } from "react";

// Lazy imports
const HeroSection = lazy(() => import("./components/HeroSection"));
const ImportantFlourite = lazy(() => import("./components/ImportandFlourite"));
const FlouriteBenefitsSection = lazy(() => import("./components/FluoriteBenefitsSection"));
const Reserves = lazy(() => import("./components/ReservesSection"));

const flouritePage = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <HeroSection />
      </Suspense>

      {/* IMPORTANCE OF FLUORITE */}
      <Suspense fallback={<div className="h-20" />}>
        <ImportantFlourite />
      </Suspense>

      {/* FLUORITE BENEFITS */}
      <Suspense fallback={<div className="h-20" />}>
        <FlouriteBenefitsSection />
      </Suspense>

      {/* RESERVES */}
      <Suspense fallback={<div className="h-20" />}>
        <Reserves />
      </Suspense>

    </div>
  );
};

export default flouritePage;
