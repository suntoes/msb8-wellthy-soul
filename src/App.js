import React from 'react'

import Chakra from './components/chakra'
import Fonts from './components/fonts'

import Hero from './compositions/hero'
import WhyBluesky from './compositions/why-bluesky'
import WorkExpectation from './compositions/work-expectation'
import WorkWithTheBest from './compositions/work-with-the-best'
import ViewWorks from './compositions/view-works'

const App = () => (
  <Chakra>
    <Fonts />
    <Hero />
    <WhyBluesky />
    <WorkExpectation />
    <WorkWithTheBest />
    <ViewWorks />
  </Chakra>
)

export default App
