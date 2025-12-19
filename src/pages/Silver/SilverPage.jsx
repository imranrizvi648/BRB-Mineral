


import React, { useState } from 'react';
import SilverHero from "./components/SilverHero";
import SilverRegions from './components/SilverRegions';
import SilverProducts from './components/SilverProducts';
import SilverApplications from './components/SilverApplications';
import SilverWhyChoose from "./components/SilverWhyChoose"
import SilverCTA from './components/SilverCTA';

import { MapPin, Droplets, Shield, Gem,Leaf,TrendingUp,Award } from 'lucide-react';
import BannerSection from './components/BannerSection';


export default function SilverPage() {
  const [activeRegion, setActiveRegion] = useState(null);

   const regions = [
   
      {
    name: "Balochistan (Lasbela-Khuzdar & Chagai Districts)",
    desc: "Hosts polymetallic deposits where galena and sphalerite carry notable silver values. Porphyry-related systems in Chagai show potential for silver as a by-product.",
    minerals: "Galena, Sphalerite, Silver",
    color: "from-[#2EA383] to-[#157196]"
  },
  {
    name: "Khyber Pakhtunkhwa (KPK)",
    desc: "Areas such as Shangla, Dir, Swat, and Kohistan contain hydrothermal vein systems with silver-bearing sulfides associated with lead-zinc mineralization.",
    minerals: "Silver, Lead-Zinc Sulfides",
    color: "from-[#966928] to-[#FDD95F]"
  },
   {
    name: "Azad Jammu & Kashmir (AJK)",
    desc: "Known for small-scale artisanal mining, showing silver potential within Pb-Zn based mineralization.",
    minerals: "Silver, Lead-Zinc",
    color: "from-[#966928] to-[#FDD95F]"
  },
  {
    name: "Gilgit-Baltistan",
    desc: "Polymetallic vein systems and high-grade metamorphic zones have reported occurrences of silver-bearing minerals, often linked with copper and gold.",
    minerals: "Silver, Copper, Gold",
    color: "from-[#2EA383] to-[#157196]"
  },
 
   
  ];
      const features = [
    {
      icon: MapPin,
      title: "Regional Geological Expertise: ",
      desc: "We specialize in Pakistan’s polymetallic systems, using detailed mapping, geophysical surveys, and geochemical sampling to identify and evaluate silver prospects."
    },
    {
      icon: Leaf,
      title: "Sustainable and Responsible Mining",
      desc: "We follow environmentally conscious practices, prioritizing safety, community development, and reclamation"
    },
    {
      icon: TrendingUp,
      title: "Consistent and Scalable Supply",
      desc: "With growing exploration programs and reliable logistics, we deliver steady, long-term access to silver-bearing material"
    },
    {
      icon: Award,
      title: "Tailored Product Options",
      desc: "From raw ore to high-grade concentrates, we customize material specifications to match refining and processing needs."
    }
 ];
  return (
    <div className="bg-white">
      <SilverHero />
      <SilverRegions regions={regions} activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
      <SilverProducts />
      <BannerSection/>
      <SilverWhyChoose features={features}/>
      <SilverApplications />
      <SilverCTA />
    </div>
  );
}




