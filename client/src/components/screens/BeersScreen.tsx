import React from 'react'
import { Helmet } from 'react-helmet-async'

import OnboardingScreen from '../templates/OnboardingScreen'

export default function BeersScreen() {
  return (
    <>
      <Helmet>
        <title>Brew Me | Beers</title>
      </Helmet>
      <OnboardingScreen>
        <h1>All our Beers</h1>
      </OnboardingScreen>
    </>
  )
}
