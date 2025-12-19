


import React, { useState } from 'react';
import RareEarthElementHero from "./components/RareEarthElementsHero";
import RareEarthElementRegions from './components/RareEarthElementsApplications';
import RareEarthElementProducts from './components/RareEarthElementsProducts';
import RareEarthElementApplications from './components/RareEarthElementsApplications';
import RareEarthElementWhyChoose from "./components/RareEarthElementsWhyChoose"
import RareEarthElementCTA from './components/RareEarthElementsCTA';

import { MapPin, Droplets, Shield, Gem,Leaf,TrendingUp,Award } from 'lucide-react';
import RareEarthElementsRegions from './components/RareEarthElementsRegions';
import BannerSection from './components/BannerSection';


export default function RareEarthElementsPage() {
  const [activeRegion, setActiveRegion] = useState(null);

const regions = [
  {
    name: "Khyber Pakhtunkhwa (KPK)",
    desc: "Pegmatite belts and alkaline complexes with potential for light and heavy REEs.",
    minerals: "Light REEs, Heavy REEs, Pegmatites",
    color: "from-[#966928] to-[#FDD95F]"
  },
  {
    name: "Balochistan (Carbonatite & Associated Systems)",
    desc: "Carbonatite and associated mineral systems, known globally to host REE minerals like monazite and bastnäsite.",
    minerals: "Monazite, Bastnäsite, REEs",
    color: "from-[#2EA383] to-[#157196]"
  },
  {
    name: "Gilgit-Baltistan",
    desc: "High-grade metamorphic terrains offering opportunities for REE-bearing pegmatites and skarn deposits.",
    minerals: "REE Pegmatites, Skarn Deposits, Metamorphic Veins",
    color: "from-[#2EA383] to-[#157196]"
  },
  {
    name: "Azad Jammu & Kashmir (AJK)",
    desc: "Emerging exploration zones with reported REE anomalies and geochemical signatures.",
    minerals: "REE Anomalies, Geochemical Signatures",
    color: "from-[#966928] to-[#FDD95F]"
  }
];


 
    const features = [
    {
      icon: MapPin,
      title: "Local Geological Expertise ",
      desc: "Our teams conduct targeted exploration using geophysics, sampling, and mineral analysis tailored to Pakistan’s unique geology."
    },
    {
      icon: Leaf,
      title: "Sustainable, Responsible Practices",
      desc: "We follow strict environmental and reclamation guidelines while supporting local communities and employment."
    },
    {
      icon: TrendingUp,
      title: "Strategic Supply Opportunities",
      desc: "Pakistan’s growing mineral sector offers strong potential for stable, long-term REE production"
    },
    {
      icon: Award,
      title: "Flexible Delivery",
      desc: "We provide raw ore, semi-processed concentrates, or tailored compositions depending on processing requirements"
    }
 ];
  return (
    <div className="bg-white">
      <RareEarthElementHero />
      
      <RareEarthElementsRegions regions={regions} activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
      {/* <RareEarthElementProducts/> */}
      <BannerSection/>
      <RareEarthElementWhyChoose features={features}/>
      <RareEarthElementApplications />
      <RareEarthElementCTA /> 
    </div>
  );
}




