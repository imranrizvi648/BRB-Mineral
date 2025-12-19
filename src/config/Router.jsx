import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";

//mineral pages
import Home from "../pages/home/homePage";
import FlouritePage from "../pages/Flourite/flouritePage";
import PhosphatePage from "../pages/Phosphate/PhosphatePage"
import IronPage from "../pages/Iron/ironPage";
import Barite from "../pages/Barite/baritePage"
import BauxitePage from "../pages/Bauxite/BauxitePage";
import TalcPage from "../pages/Talc/talcPage";


//brbexploration pages
import BrbExploration from "../pages/BrbExploration/brbexplorationPage"
import PlacerGold from "../pages/PlacerGold/placerGoldPagee";
import BlackSand from "../pages/BlackSand/blackSandPage";

//brb Mineral and Metal 
import BrbMineralAndMetalpage from "../pages/BrbMineralAndMetal/brbmineralandmetalpage";
import CopperPage from "../pages/Copper/copperPage";
import LeadZincPage from "../pages/LeadZinc/LeadZincPage";
import GoldPage from "../pages/Gold/GoldPage";
import SilverPage from "../pages/Silver/SilverPage";
import AntimonyPage from "../pages/Antimony/AntimonyPage";
import MolybdenumPage from "../pages/Molybdenum/MolybdenumPage";
import ScrollToTop from "../components/ScrollToTop";

import RareEarthElementsPage from "../pages/RareEarthElements/RareEarthElementsPage";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Layout />}>
       
       // mineral Routes
        <Route index element={<Home />} />
         <Route path="/mineral" element={<Home />} />
        <Route path="/mineral/flourite" element={<FlouritePage />} />
         <Route path="/mineral/phosphate" element={<PhosphatePage />} />
         <Route path="/mineral/iron" element={<IronPage />} />
         <Route path="/mineral/barite" element={<Barite />} />
         <Route path="/mineral/bauxite" element={<BauxitePage />} />
         <Route path="/mineral/talc" element={<TalcPage />} />
        
        // BRB Exploration Roites
        <Route path="/brb-exploration" element={<BrbExploration />} />
        <Route path="/brb-exploration/placergold" element={<PlacerGold/>}/>
        <Route path="/brb-exploration/blacksand" element={<BlackSand/>}/>

        //BRB Mineral and Metal 
        <Route path="/brb-mineral-and-metal" element={<BrbMineralAndMetalpage />} />
        <Route path="/brb-mineral-and-metal/copper" element={<CopperPage />} />
        <Route path="/brb-mineral-and-metal/leadzinc" element={<LeadZincPage />} />
         <Route path="/brb-mineral-and-metal/silver" element={<SilverPage />} />
        <Route path="/brb-mineral-and-metal/gold" element={<GoldPage />} />
          <Route path="/brb-mineral-and-metal/antimony" element={<AntimonyPage />} />
          <Route path="/brb-mineral-and-metal/molybdenum" element={<MolybdenumPage />} />
          <Route path="/brb-mineral-and-metal/rare-earth-elements" element={<RareEarthElementsPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
