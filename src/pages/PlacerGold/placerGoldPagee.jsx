import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import RegionsSection from './components/RegionsSection';
import ProductsSection from './components/ProductsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ApplicationsSection from './components/ApplicationsSection';
import ClosingStatement from './components/ClosingStatement';
import { MapPin, Droplets, Shield, Gem } from 'lucide-react';
import BannerSection from './components/BannerSection';

export default function PlacerGoldPage() {
  const [activeRegion, setActiveRegion] = useState(null);

  const regions = [
    { name: "Khyber Pakhtunkhwa (KPK)", areas: "Swat, Chitral, Shangla, Dir", description: "Well known for alluvial gold in riverbeds and seasonal streams, traditionally recovered by panning", color: "from-[#2EA383] to-[#157196]" },
     { name: "Balochistan", areas: "Select Drainages", description: "Near porphyry copper-gold systems showing evidence of placer gold anomalies", color: "from-[#966928] to-[#FDD95F]" },
    
     { name: "Gilgit-Baltistan", areas: "Indus, Gilgit, Astore, Hunza Rivers", description: "Major rivers carry gold from high-altitude veins, creating rich placer pockets along river terraces", color: "from-[#966928] to-[#FDD95F]" },
  { name: "Azad Jammu & Kashmir", areas: "Mountainous River Tributaries", description: "Rivers contain fine placer gold from quartz vein weathering in mountainous areas", color: "from-[#2EA383] to-[#157196]" },
  ];

  const products = [
    { name: "Natural placer gold", detail: "Nugget, flake, and fine gold form" },
    { name: "Clean concentrates", detail: "For hobbyists, refiners, and commercial buyers" },
    { name: "Certified purity", detail: "Via assay testing to verify gold grade" },
    { name: "Ethical sourcing", detail: "Aligned with environmental guidelines" },
    { name: "Custom quantities", detail: "Bulk and custom based on requirements" }
  ];

  const features = [
  {
    image: "/brbExploration/placerGold/Local Alluvial Expertise.webp",
    title: "Local Alluvial Expertise",
    desc: "Identifying high-yield placer zones using advanced analysis",
  },
  {
    image: "/brbExploration/placerGold/Environmentally Conscious .webp",
    title: "Environmentally Conscious",
    desc: "Low-impact extraction preserving natural waterways",
  },
  {
    image: "/brbExploration/placerGold/Reliable Supply.webp",
    title: "Reliable Supply",
    desc: "Pre-sorted, washed, and quality-assured material",
  },
  {
    image: "/brbExploration/placerGold/Custom Products.webp",
    title: "Custom Products",
    desc: "Tailored solutions for refiners and collectors",
  },
];


const applications = [
  "Refining and bullion production",
  "Jewelry and artisanal craftsmanship",
  "Investment-grade natural gold specimens",
  "Geology, education, and research",
  "Recreational panning and small-scale refining"
];

const images = [
  "/brbExploration/placerGold/Refining and bullion production.webp",
  "/brbExploration/placerGold/Jewelry and artisanal craftsmanship.webp",
  "/brbExploration/placerGold/Investment-grade natural gold specimens.webp",
  "/brbExploration/placerGold/Geology, education, and research.webp",
  "/brbExploration/placerGold/Recreational panning and small-scale refining.webp",
];

<ApplicationsSection applications={applications} images={images} />


  return (
    <div className="min-h-screen bg-white">
      <HeroSection/>
    
      <RegionsSection regions={regions} activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
      <BannerSection/>
      <ProductsSection products={products} />
      <WhyChooseUsSection features={features} />
     <ApplicationsSection applications={applications} images={images} />
      <ClosingStatement />
    </div>
  );
}
