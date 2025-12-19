import React from 'react'
import HeroSection from './components/HeroSection'
import ImportantTalc from './components/ImportantTalc'
import TalcBenefitsSection from './components/TalcBenefitsSection'
import Reserves from './components/ReservesSection'

const talcPage = () => {
  return (
    <div>
      <HeroSection/>
      <ImportantTalc/>
      <TalcBenefitsSection/>
      <Reserves/>
    </div>
  )
}

export default talcPage
