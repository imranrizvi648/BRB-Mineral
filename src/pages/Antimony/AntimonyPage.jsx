


import React, { useState } from 'react';
import AntimonyHero from "./components/AntimonyHero";
import AntimonyRegions from './components/AntimonyRegions';
import AntimonyProducts from './components/AntimonyProducts';
import AntimonyApplications from './components/AntimonyApplications';
import AntimonyWhyChoose from "./components/AntimonyWhyChoose"
import AntimonyCTA from './components/AntimonyCTA';
import BannerSection from './components/BannerSection';
import { MapPin, Droplets, Shield, Gem,Leaf,TrendingUp,Award } from 'lucide-react';


export default function GoldPage() {
  const [activeRegion, setActiveRegion] = useState(null);

 const regions = [
  {
    name: "Balochistan",
    desc: "Areas around Khuzdar, Lasbela, and sections of the Chagai belt have reported stibnite occurrences along with small-scale historical workings.",
    minerals: "Stibnite (Antimony Sulfide)",
    color: "from-[#2EA383] to-[#157196]"
  },
  {
    name: "Khyber Pakhtunkhwa (KPK)",
    desc: "Mineralized zones in Shangla, Chitral, and Kohistan indicate the presence of antimony-bearing veins associated with hydrothermal systems.",
    minerals: "Antimony Veins, Hydrothermal Sulfides",
    color: "from-[#966928] to-[#FDD95F]"
  },
  {
    name: "Gilgit-Baltistan",
    desc: "High-grade metamorphic terrains contain polymetallic vein systems where stibnite may occur along with other sulfide minerals.",
    minerals: "Stibnite, Polymetallic Sulfides",
    color: "from-[#2EA383] to-[#157196]"
  }
];

 
   
 
      const features = [
    {
      icon: MapPin,
      title: "In-Depth Local Exploration Expertise ",
      desc: "Our teams specialize in Pakistan’s sulfide mineral systems, using sampling, geophysics, and geochemical analysis to identify high-value zones."
    },
    {
      icon: Leaf,
      title: "Sustainable Operations",
      desc: "We follow strict environmental standards, emphasizing responsible extraction, community engagement, and site rehabilitation."
    },
    {
      icon: TrendingUp,
      title: "Dependable, Scalable Supply",
      desc: "With expanding exploration programs and efficient logistics, BRB ensures stable and long-term material availability"
    },
    {
      icon: Award,
      title: "Custom Material Specifications",
      desc: "Whether supplying raw ore or stibnite concentrates of specific Sb grades, we tailor deliveries to meet industrial requirements."
    }
 ];
  return (
    <div className="bg-white">
      <AntimonyHero />
      <AntimonyRegions regions={regions} activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
      <AntimonyProducts />
      <BannerSection />
      <AntimonyWhyChoose features={features}/>
      
      <AntimonyApplications />
      <AntimonyCTA />
    </div>
  );
}




