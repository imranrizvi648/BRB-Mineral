import React from 'react'
import HeroSection from './components/HeroSection'
import ImportantBauxite from './components/ImportantBauxite'
import BauxiteBenefitsSection from './components/BauxiteBenefitsSection'
import Reserves from './components/ReservesSection'

const BauxitePage = () => {
  return (
    <div>
      <HeroSection/>
      <ImportantBauxite/>
      <BauxiteBenefitsSection/>
      <Reserves/>
    </div>
  )
}

export default BauxitePage
