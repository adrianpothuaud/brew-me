import React from 'react'
// import { createUseStyles } from 'react-jss'

import OnboardingMain from '../atoms/OnboardingMain'
import OnboardingFooter from '../organisms/OnboardingFooter'
import OnboardingHeader from '../organisms/OnboardingHeader'

type OnboardingScreenProps = {
  children: React.ReactNode
}

// const useStyles = createUseStyles({

// })

export default function OnboardingScreen(props: OnboardingScreenProps) {
  return (
    <>
      <OnboardingHeader />
      <OnboardingMain>
        {props.children}
      </OnboardingMain>
      <OnboardingFooter />
    </>
  )
}
