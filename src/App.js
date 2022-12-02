import React from 'react'

import Chakra from './components/chakra'
import Fonts from './components/fonts'

import Hero from './compositions/hero'
import WhyBluesky from './compositions/why-bluesky'
import WorkExpectation from './compositions/work-expectation'
import WorkWithTheBest from './compositions/work-with-the-best'
import ViewWorks from './compositions/view-works'
import DiscoverCapabilities from './compositions/discover-capabilities'
import OurPrecess from './compositions/our-process'
import Client from './compositions/client'
import Contact from './compositions/contact'

const App = () => (
  <Chakra>
    <Fonts />
    <Hero />
    <WhyBluesky />
    <WorkExpectation />
    <WorkWithTheBest />
    <ViewWorks />
    <DiscoverCapabilities />
    <OurPrecess />
    <Client />
    <Contact />
  </Chakra>
)

export default App
