import React from 'react'
import { createUseStyles } from 'react-jss'
import { LoremIpsum } from 'react-lorem-ipsum'

import OnboardingScreen from '../templates/OnboardingScreen'

const useStyles = createUseStyles({

})

export default function NoMatchScreen() {
  const classes = useStyles()

  return (
    <OnboardingScreen>
      <h1>Oups!! Page Not Found (404) ERROR</h1>
      <LoremIpsum p={2} />
    </OnboardingScreen>
  )
}
