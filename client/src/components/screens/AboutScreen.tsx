import React from 'react'
import { Helmet } from 'react-helmet-async'
// import { createUseStyles } from 'react-jss'
import { LoremIpsum } from 'react-lorem-ipsum'

import OnboardingScreen from '../templates/OnboardingScreen'

// const useStyles = createUseStyles({

// })

export default function AboutScreen() {
  // const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Brew Me | About</title>
      </Helmet>
      <OnboardingScreen>
        <h1>About us</h1>
        <LoremIpsum p={2} />
      </OnboardingScreen>
    </>
  )
}
