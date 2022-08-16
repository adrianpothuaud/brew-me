import React from 'react'
// import { createUseStyles } from 'react-jss'

type OnboardingMainProps = {
  children: React.ReactNode
}

// const useStyles = createUseStyles({

// })

export default function OnboardingMain(props: OnboardingMainProps) {
  return (
    <main>{props.children}</main>
  )
}
