


import React, { useState } from 'react';
import MolybdenumHero from "./components/MolybdenumHero";
import MolybdenumRegions from './components/MolybdenumRegions';
import MolybdenumProducts from './components/MolybdenumProducts';
import MolybdenumApplications from './components/MolybdenumApplications';
import MolybdenumWhyChoose from "./components/MolybdenumWhyChoose"
import MolybdenumCTA from './components/MolybdenumCTA';

import { MapPin, Droplets, Shield, Gem,Leaf,TrendingUp,Award } from 'lucide-react';
import BannerSection from './components/BannerSection';


export default function MolybdenumPage() {
  const [activeRegion, setActiveRegion] = useState(null);

 const regions = [
  {
    name: "Balochistan (Chagai Metallogenic Belt)",
    desc: "Known for porphyry copper systems that often contain molybdenite (MoS₂) as a by-product or primary mineral.",
    minerals: "Molybdenite, Copper, Porphyry Systems",
    color: "from-[#2EA383] to-[#157196]"
  },
  {
    name: "Khyber Pakhtunkhwa (KPK)",
    desc: "Skarn and intrusive-related mineral systems with molybdenum-bearing veins and sulfide assemblages.",
    minerals: "Molybdenite, Skarn Veins, Sulfides",
    color: "from-[#966928] to-[#FDD95F]"
  },
  {
    name: "Gilgit-Baltistan",
    desc: "High-grade metamorphic terrains and intrusive complexes with potential molybdenite occurrences.",
    minerals: "Molybdenite, Metamorphic Veins, Intrusives",
    color: "from-[#2EA383] to-[#157196]"
  }
];

 
    const features = [
    {
      icon: MapPin,
      title: "Local Geological Expertise ",
      desc: "Our exploration teams specialize in Pakistan’s porphyry and skarn systems, using geophysics, drilling, and geochemical analysis to identify high-value deposits"
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      desc: "We apply sustainable extraction methods, responsible waste management, and site reclamation practices"
    },
    {
      icon: TrendingUp,
      title: "Reliable Supply Chain",
      desc: "With ongoing exploration and efficient logistics, BRB ensures dependable delivery for domestic and international industries"
    },
    {
      icon: Award,
      title: "Custom Solutions",
      desc: "Whether you require raw ore or grade-specific molybdenite concentrates, we tailor material specifications to your needs"
    }
 ];
  return (
    <div className="bg-white">
      <MolybdenumHero />
      <MolybdenumRegions regions={regions} activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
      <MolybdenumProducts />
      <BannerSection/>
      <MolybdenumWhyChoose features={features}/>
      <MolybdenumApplications />
      <MolybdenumCTA />
    </div>
  );
}




