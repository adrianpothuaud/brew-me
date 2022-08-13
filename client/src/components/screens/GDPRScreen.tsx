import React from 'react'
import { Helmet } from 'react-helmet-async'
// import { createUseStyles } from 'react-jss'
import { LoremIpsum } from 'react-lorem-ipsum'

import OnboardingScreen from '../templates/OnboardingScreen'

// const useStyles = createUseStyles({

// })

export default function GDPRScreen() {
  // const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Brew Me | GDPR</title>
      </Helmet>
      <OnboardingScreen>
        <h1>Legal statements</h1>
        <LoremIpsum p={1} />
      </OnboardingScreen>
    </>
  )
}
