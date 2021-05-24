import React from 'react'
import Hero from '../components/sections/Hero'
import FeaturesSplit from '../components/sections/FeaturesSplit'
import Dre from '../components/sections/Dre'
import TeamSection from '../components/sections/TeamSection'
import PartnersSection from '../components/sections/PartnersSection'
import PlatfromVideo from '../components/sections/PlatfromVideo'

const Home = () => {
  return (
    <>
      <Hero />
      <Dre split />
      <PlatfromVideo />
      <FeaturesSplit id="features" />
      <PartnersSection />
      <TeamSection id="team" />
    </>
  )
}
export default Home
