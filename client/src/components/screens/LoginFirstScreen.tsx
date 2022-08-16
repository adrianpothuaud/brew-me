import React from 'react'
import { Helmet } from 'react-helmet-async'
// import { createUseStyles } from 'react-jss'
import { LoremIpsum } from 'react-lorem-ipsum'

import OnboardingScreen from '../templates/OnboardingScreen'

// const useStyles = createUseStyles({

// })

export default function LoginFirstScreen() {
  // const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Brew Me | Login</title>
      </Helmet>
      <OnboardingScreen>
        <h1>Choose your account type</h1>
        <section data-pw="choose login type section">
          <article data-pw="choose client login">
            <h2>Client account</h2>
            <LoremIpsum p={1} />
            <a href="/auth/login/client">I am a client</a>
          </article>
          <article data-pw="choose brewer login">
            <h2>Brewer account</h2>
            <LoremIpsum p={1} />
            <a href="/auth/login/brewer">I am a brewer</a>
          </article>
        </section>
      </OnboardingScreen>
    </>
  )
}
