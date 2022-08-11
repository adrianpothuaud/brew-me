import React from 'react'
import { createUseStyles } from 'react-jss'
import { LoremIpsum } from 'react-lorem-ipsum'

import OnboardingScreen from '../templates/OnboardingScreen'

const useStyles = createUseStyles({

})

export default function ContactScreen() {
  const classes = useStyles()

  return (
    <OnboardingScreen>
      <LoremIpsum p={2} />
    </OnboardingScreen>
  )
}