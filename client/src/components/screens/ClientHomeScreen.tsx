import React from 'react'
import { Helmet } from 'react-helmet-async'

import ClientScreen from '../templates/ClientScreen'

export default function ClientHomeScreen() {
  return (
    <>
      <Helmet>
        <title>Brew Me | Client home</title>
      </Helmet>
      <ClientScreen>
        <h1>Hello Client!</h1>
      </ClientScreen>
    </>
  )
}
