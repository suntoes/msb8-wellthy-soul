import React from 'react'

import { Box } from '@chakra-ui/react'

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
    <Box
      position="relative"
      zIndex={-1}
      bgImage="url(images/background-asset-02.png)"
    >
      <DiscoverCapabilities />
      <OurPrecess />
    </Box>
    <Client />
    <Contact />
  </Chakra>
)

export default App
