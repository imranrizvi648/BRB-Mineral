import React from "react";
import { useState } from "react";
import LeadZincHero from "./components/LeadZincHero";
import LeadZincRegions from "./components/LeadZincRegions";
import LeadZincProducts from "./components/LeadZincProducts";
import LeadZincWhyChooseUsSection from "./components/LeadZincWhyChoose";
import {
  MapPin,
  Droplets,
  Shield,
  Gem,
  Leaf,
  TrendingUp,
  Award,
} from "lucide-react";
import LeadZincApplications from "./components/LeadZincApplications";
import LeadZincCTA from "./components/LeadZincCTA";
import BannerSection from "./components/BannerSection";

const LeadZincPage = () => {
  const [activeRegion, setActiveRegion] = useState(null);

  const regions = [
    {
      name: "Lasbela–Khuzdar Belt (Balochistan)",
      desc: "Pakistan’s most productive base-metal zone, hosting carbonate-hosted and skarn-type deposits containing galena (PbS) and sphalerite (ZnS).",
      minerals: "Galena (PbS), Sphalerite (ZnS)",
      color: "from-[#2EA383] to-[#157196]",
    },
    {
      name: "Duddar Region (Balochistan)",
      desc: "Site of Pakistan’s first large-scale lead-zinc mining operation, confirming the district’s high-grade potential.",
      minerals: "Lead, Zinc",
      color: "from-[#966928] to-[#FDD95F]",
    },
    {
      name: "Gilgit-Baltistan & AJK",
      desc: "Polymetallic veins in mountainous terrains contain lead, zinc, silver, and copper, offering opportunities for future development.",
      minerals: "Lead, Zinc, Silver, Copper",
      color: "from-[#966928] to-[#FDD95F]",
    },
    {
      name: "Khyber Pakhtunkhwa (KPK)",
      desc: "Mineralized veins in Shangla, Kohistan, Dir, and Swat contain Pb-Zn sulfides formed through hydrothermal activity.",
      minerals: "Lead, Zinc",
      color: "from-[#2EA383] to-[#157196]",
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Local Geological Expertise",
      desc: "Our teams specialize in Pakistan’s base-metal belts, applying advanced mapping, sampling, and geochemical evaluation",
    },
    {
      icon: Leaf,
      title: "Sustainable Extraction Practices",
      desc: "We prioritize safe mining, water stewardship, and full environmental compliance.",
    },
    {
      icon: TrendingUp,
      title: "Stable Supply & Scalable Operations",
      desc: "BRB maintains reliable logistics and expanding exploration programs to support long-term Pb-Zn supply",
    },
    {
      icon: Award,
      title: "Tailored Material Specifications",
      desc: "Whether for galvanizing, alloy production, smelting, or battery manufacturing, we adapt concentrate grades to your requirements",
    },
  ];

  return (
    <div>
      <LeadZincHero />
      <LeadZincRegions
        regions={regions}
        activeRegion={activeRegion}
        setActiveRegion={setActiveRegion}
      />
      <LeadZincProducts />
      <BannerSection/>
      <LeadZincWhyChooseUsSection features={features} />
      <LeadZincApplications />
      <LeadZincCTA />
    </div>
  );
};

export default LeadZincPage;
