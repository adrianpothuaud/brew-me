import React from 'react'
import { Helmet } from 'react-helmet-async'
// import { createUseStyles } from 'react-jss'
import { LoremIpsum } from 'react-lorem-ipsum'

import OnboardingScreen from '../templates/OnboardingScreen'

// const useStyles = createUseStyles({

// })

export default function RegisterFormScreen() {
  // const classes = useStyles()
  return (
    <>
      <Helmet>
        <title>Brew Me | Registration</title>
      </Helmet>
      <OnboardingScreen>
        <h1>Choose your account type</h1>
        <section data-pw="choose registration type section">
          <article data-pw="choose client registration">
            <h2>Client account</h2>
            <LoremIpsum p={1} />
            <a href="/auth/register/client">I want to be a client</a>
          </article>
          <article data-pw="choose brewer registration">
            <h2>Brewer account</h2>
            <LoremIpsum p={1} />
            <a href="/auth/register/brewer">I want to be a brewer</a>
          </article>
        </section>
      </OnboardingScreen>
    </>
  )
}
