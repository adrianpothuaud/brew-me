import React from 'react'
import { Helmet } from 'react-helmet-async'
// import { createUseStyles } from 'react-jss'
import { LoremIpsum } from 'react-lorem-ipsum'

import OnboardingScreen from '../templates/OnboardingScreen'

// const useStyles = createUseStyles({

// })

export default function ContactScreen() {
  // const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Brew Me | Contact</title>
      </Helmet>
      <OnboardingScreen>
        <h1>Contact us</h1>
        <LoremIpsum p={1} />
      </OnboardingScreen>
    </>
  )
}
