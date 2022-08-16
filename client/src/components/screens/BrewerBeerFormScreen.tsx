import React from 'react'
import { Helmet } from 'react-helmet-async'

// import useBeerForm from '../../hooks/brewer/useBeerForm'
import BrewerScreen from '../templates/BrewerScreen'

export default function BrewerBeerFormScreen() {
  // const form = useBeerForm()

  return (
    <>
      <Helmet>
        <title>Brew Me | Add Beer</title>
      </Helmet>
      <BrewerScreen>
        <section data-pw="brewer beer form section">
          <form>

          </form>
        </section>
      </BrewerScreen>
    </>
  )
}
