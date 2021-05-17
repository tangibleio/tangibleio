import React from 'react'
import Hero from '../components/sections/Hero'
import FeaturesSplit from '../components/sections/FeaturesSplit'
import Dre from '../components/sections/Dre'
import FeaturesTiles from '../components/sections/FeaturesTiles'
import PlatfromVideo from '../components/sections/PlatfromVideo'

const Home = () => {
  return (
    <>
      <Hero />

      <PlatfromVideo />
      <FeaturesSplit id="features" />
      <Dre split />
      <FeaturesTiles id="team" />
    </>
  )
}
export default Home
