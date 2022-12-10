import React from 'react'

import Chakra from './components/chakra'
import Fonts from './components/fonts'

import Hero from './compositions/hero'
import SuccessRate from './compositions/success-rate'
import CustomApproach from './compositions/custom-approach'
import ChangeTogether from './compositions/change-together'
import Expect from './compositions/expect'
import Process from './compositions/process'
import GuideTo from './compositions/guide-to'
import Team from './compositions/team'
import MedicalAndInclusion from './compositions/medical-and-inclusion'
import Testimonials from './compositions/testimonials'
import Footer from './compositions/footer'

const App = () => (
  <Chakra>
    <Fonts />
    <Hero />
    <SuccessRate />
    <CustomApproach />
    <ChangeTogether />
    <Expect />
    <Process />
    <GuideTo />
    <Team />
    <MedicalAndInclusion />
    <Testimonials />
    <Footer />
  </Chakra>
)

export default App
