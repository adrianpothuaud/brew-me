import React from 'react'
import { Helmet } from 'react-helmet-async'

import BrewerScreen from '../templates/BrewerScreen'

export default function BrewerBeersScreen() {
  return (
    <>
      <Helmet>
        <title>Brew Me | Brewer home</title>
      </Helmet>
      <BrewerScreen>
        <section data-pw="brewer beers action section">
          <a href="/brewer/beers/add">Add a new Beer</a>
        </section>
        <section data-pw="brewer beers filters section">
          <input placeholder="Search for beers..." type="text" />
        </section>
        <section data-pw="brewer beers list section">
          <table>
            <thead>

            </thead>
            <tbody>

            </tbody>
          </table>
        </section>
      </BrewerScreen>
    </>
  )
}
