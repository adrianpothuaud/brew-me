import React from 'react'
import { Helmet } from 'react-helmet-async'

import OnboardingScreen from '../templates/OnboardingScreen'

export default function ChampionsScreen() {
  return (
    <>
      <Helmet>
        <title>Brew Me | Champions</title>
      </Helmet>
      <OnboardingScreen>
        <h1>Our Champions</h1>
      </OnboardingScreen>
    </>
  )
}
