import React from 'react'

import Chakra from './components/chakra'
import Fonts from './components/fonts'

import Hero from './compositions/hero'
import WhyBluesky from './compositions/why-bluesky'

const App = () => (
  <Chakra>
    <Fonts />
    <Hero />
    <WhyBluesky />
  </Chakra>
)

export default App
