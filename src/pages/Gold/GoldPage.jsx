


import React, { useState } from 'react';
import GoldHero from "./components/GoldHero";
import GoldRegions from './components/GoldRegions';
import GoldProducts from './components/GoldProducts';
import GoldApplications from './components/GoldApplications';
import GoldWhyChoose from "./components/GoldWhyChoose"
import GoldCTA from './components/GoldCTA';
// import CopperApplications from "./components/CopperApplications";
// import CopperCTA from "./components/CopperCTA";
import { MapPin, Droplets, Shield, Gem,Leaf,TrendingUp,Award } from 'lucide-react';
import BannerSection from './components/BannerSection';


export default function GoldPage() {
  const [activeRegion, setActiveRegion] = useState(null);

 const regions = [
  {
    name: "Balochistan (Reko Diq–Saindak Belt)",
    desc: "World-class porphyry systems containing copper-gold mineralization, with potential for high-grade gold zones and significant by-product recovery.",
    minerals: "Copper, Gold, Porphyry Systems",
    color: "from-[#2EA383] to-[#157196]"
  },
  {
    name: "Khyber Pakhtunkhwa (KPK)",
    desc: "Shangla, Swat, Chitral, and Kohistan host both placer gold in riverbeds and hard-rock gold within shear zones and quartz veins.",
    minerals: "Placer Gold, Hard-Rock Gold, Quartz Veins",
    color: "from-[#966928] to-[#FDD95F]"
  },
  {
    name: "Gilgit-Baltistan",
    desc: "Alluvial gold occurrences along major river systems and gold-bearing quartz veins within high-grade metamorphic terrains.",
    minerals: "Alluvial Gold, Quartz Vein Gold",
    color: "from-[#2EA383] to-[#157196]"
  },
  {
    name: "Azad Jammu & Kashmir (AJK)",
    desc: "Region shows placer gold anomalies and supports small-scale artisanal panning activities.",
    minerals: "Placer Gold",
    color: "from-[#966928] to-[#FDD95F]"
  }

 
   
  ];
      const features = [
    {
      icon: MapPin,
      title: "Localized Geological Expertise ",
      desc: "Our teams use advanced geophysics, geochemistry, and detailed mapping tailored to Pakistan’s unique gold-bearing terrains."
    },
    {
      icon: Leaf,
      title: "Responsible Extraction",
      desc: "We prioritize environmentally conscious operations, safe mining practices, water management, and land rehabilitation."
    },
    {
      icon: TrendingUp,
      title: "Reliable, Long-Term Supply",
      desc: "Continuous exploration and efficient logistics ensure stable availability for refiners, manufacturers, and investors"
    },
    {
      icon: Award,
      title: "Custom Gold Products",
      desc: "Whether you need raw ore, processed concentrates, or clean placer gold, we tailor materials to your operational needs."
    }
 ];
  return (
    <div className="bg-white">
      <GoldHero />
      <GoldRegions regions={regions} activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
      <GoldProducts />
      <BannerSection/>
      <GoldWhyChoose features={features}/>
      <GoldApplications />
      <GoldCTA />
    </div>
  );
}




