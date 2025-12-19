import React from 'react'
import HeroSection from './components/HeroSection'
import ImportantBarite from './components/ImportantBarite'
import BariteBenefitsSection from './components/BariteBenefitsSection'
import Reserves from './components/ReservesSection'

const baritePage = () => {
  return (
    <div>
      <HeroSection/>
      <ImportantBarite/>
      <BariteBenefitsSection/>
      <Reserves/>
    </div>
  )
}

export default baritePage
