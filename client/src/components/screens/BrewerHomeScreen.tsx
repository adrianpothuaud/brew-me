import React from 'react'
import { Helmet } from 'react-helmet-async'

import BrewerScreen from '../templates/BrewerScreen'

export default function BrewerHomeScreen() {
  return (
    <>
      <Helmet>
        <title>Brew Me | Brewer home</title>
      </Helmet>
      <BrewerScreen>
        <h1>Hello Brewer!</h1>
      </BrewerScreen>
    </>
  )
}
