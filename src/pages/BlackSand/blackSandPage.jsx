import React, { useState } from "react";
import HeroSection from "./components/HeroSection";

import RegionsSection from "./components/RegionsSection";
import ProductsSection from "./components/ProductsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ApplicationsSection from "./components/ApplicationsSection";
import ClosingStatement from "./components/ClosingStatement";
import { MapPin, Droplets, Shield, Gem } from "lucide-react";
import BannerSection from "./components/BannerSection";

export default function blackSandPage() {
  const [activeRegion, setActiveRegion] = useState(null);

  const regions = [
    {
      name: "Khyber Pakhtunkhwa (KPK)",
      areas: "Swat, Chitral, Shangla, Dir",
      description:
        "Well known for containing heavy mineral concentrates mixed with placer gold.",
      color: "from-[#2EA383] to-[#157196]",
    },

    {
      name: "Gilgit-Baltistan",
      areas: "Indus, Gilgit, Hunza Rivers",
      description:
        "Major rivers carry magnetite- and hematite-rich sediments from the surrounding mountains.",
      color: "from-[#966928] to-[#FDD95F]",
    },
    {
      name: "Balochistan",
      areas: "Select Drainages",
      description:
        "Certain drainages near copper-gold and iron-bearing formations may produce magnetite- and ilmenite-rich black sands.",
      color: "from-[#966928] to-[#FDD95F]",
    },
    {
      name: "Azad Jammu & Kashmir",
      areas: "Alluvial systems ",
      description:
        "Alluvial systems transport heavy minerals downstream, creating localized pockets of black sand deposits.",
      color: "from-[#2EA383] to-[#157196]",
    },
  ];

  const products = [
    {
      name: "	Clean, screened black sand concentrates",
      detail: "Nugget, flake, and fine gold form",
    },
    {
      name: "Heavy mineral content ",
      detail:
        "including magnetite, hematite, ilmenite, and fine gold (dependent on source)",
    },
    {
      name: "Assay-tested samples ",
      detail: "For customers requiring mineral characterization",
    },
    {
      name: "Bulk and custom quantities ",
      detail:
        "For hobbyists, prospectors, refiners, and industrial applications",
    },
    {
      name: "Responsibly sourced material",
      detail: "Aligned with Pakistan’s mining and environmental guidelines",
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Regional Expertise",
      desc: "Our teams use sediment sampling, panning tests, and mineral separation techniques to identify high-yield black sand zones",
    },
    {
      icon: Droplets,
      title: "Quality Control",
      desc: "We wash, screen, and classify black sand to deliver clean, reliable concentrates.",
    },
    {
      icon: Shield,
      title: "Sustainable Extraction",
      desc: "Low-impact collection methods are used to protect waterways and local ecosystems.",
    },
    {
      icon: Gem,
      title: "Custom Solutions",
      desc: "From raw black sand to refined heavy mineral concentrates, we tailor our product to your specific needs.",
    },
  ];

  const applications = [
    "Gold panning and recreational prospecting",
    "Testing and refining for fine gold recovery",
    "Magnetic and heavy mineral separation",
    "Educational, geological, and research uses",
    "Industrial applications requiring magnetite or ilmenite",
  ];

  const images = [
    "/brbExploration/blackSand/Gold panning and recreational prospecting.webp",
    "/brbExploration/blackSand/Testing and refining for fine gold recovery.webp",
    "/brbExploration/blackSand/Magnetic and heavy mineral separation.webp",
   "/brbExploration/blackSand/Educational, geological, and research uses.webp ",
    "/brbExploration/blackSand/3400169.webp",
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <RegionsSection
        regions={regions}
        activeRegion={activeRegion}
        setActiveRegion={setActiveRegion}
      />
      <BannerSection/>
      <ProductsSection products={products} />
      <WhyChooseUsSection features={features} />
      <ApplicationsSection applications={applications} images={images} />
      <ClosingStatement />
    </div>
  );
}
