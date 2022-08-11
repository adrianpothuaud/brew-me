import { faker } from '@faker-js/faker'
import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { LoremIpsum, loremIpsum } from 'react-lorem-ipsum'

import OnboardingScreen from '../templates/OnboardingScreen'

const useStyles = createUseStyles({
  popularBeerArticle: {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 4,
  },
  popularBeerDescription: {
    backgroundColor: 'rgba(0, 11, 255, 0.08)',
    padding: 4,
  },
  popularBeerImage: {
    height: 160,
    width: 'auto',
  },
  popularBeerName: {
    fontWeight: 'bold',
  },
  popularBeersSection: {},
  popularBeersGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
})

type Beer = {
  key: number
  name: string
  imageUrl: string
  description: string
}

const sampleBeers: Beer[] = [
  {
    key: 1,
    name: faker.commerce.productName(),
    imageUrl: 'https://www.heineken.com/media-eu/01pfxdqq/heineken-original-bottle.png?quality=85',
    description: loremIpsum({ p: 1 })[0],
  },
  {
    key: 2,
    name: faker.commerce.productName(),
    imageUrl: 'https://www.heineken.com/media-eu/01pfxdqq/heineken-original-bottle.png?quality=85',
    description: loremIpsum({ p: 1 })[0],
  },
  {
    key: 3,
    name: faker.commerce.productName(),
    imageUrl: 'https://www.heineken.com/media-eu/01pfxdqq/heineken-original-bottle.png?quality=85',
    description: loremIpsum({ p: 1 })[0],
  },
  {
    key: 4,
    name: faker.commerce.productName(),
    imageUrl: 'https://www.heineken.com/media-eu/01pfxdqq/heineken-original-bottle.png?quality=85',
    description: loremIpsum({ p: 1 })[0],
  },
  {
    key: 5,
    name: faker.commerce.productName(),
    imageUrl: 'https://www.heineken.com/media-eu/01pfxdqq/heineken-original-bottle.png?quality=85',
    description: loremIpsum({ p: 1 })[0],
  },
  {
    key: 6,
    name: faker.commerce.productName(),
    imageUrl: 'https://www.heineken.com/media-eu/01pfxdqq/heineken-original-bottle.png?quality=85',
    description: loremIpsum({ p: 1 })[0],
  },
  {
    key: 7,
    name: faker.commerce.productName(),
    imageUrl: 'https://www.heineken.com/media-eu/01pfxdqq/heineken-original-bottle.png?quality=85',
    description: loremIpsum({ p: 1 })[0],
  },
  {
    key: 8,
    name: faker.commerce.productName(),
    imageUrl: 'https://www.heineken.com/media-eu/01pfxdqq/heineken-original-bottle.png?quality=85',
    description: loremIpsum({ p: 1 })[0],
  },
  {
    key: 9,
    name: faker.commerce.productName(),
    imageUrl: 'https://www.heineken.com/media-eu/01pfxdqq/heineken-original-bottle.png?quality=85',
    description: loremIpsum({ p: 1 })[0],
  },
  {
    key: 10,
    name: faker.commerce.productName(),
    imageUrl: 'https://www.heineken.com/media-eu/01pfxdqq/heineken-original-bottle.png?quality=85',
    description: loremIpsum({ p: 1 })[0],
  },
]

export default function HomeScreen() {
  const classes = useStyles()
  const [popularBeers, setPopularBeers] = useState<Beer[]>()

  useEffect(() => {
    setPopularBeers(sampleBeers)
  }, [])

  return (
    <OnboardingScreen>
      <h1>Welcome to Brew Me!</h1>
      <LoremIpsum p={2} />
      {/* most popular beers */}
      <section className={classes.popularBeersSection}>
        <h2>Our Most popular Beers</h2>
        <div className={classes.popularBeersGrid}>
          {popularBeers?.map((beer) => (
            <article key={beer.key} className={classes.popularBeerArticle}>
              <h3 className={classes.popularBeerName}>{beer.name}</h3>
              <img alt="beer image" className={classes.popularBeerImage} src="https://www.heineken.com/media-eu/01pfxdqq/heineken-original-bottle.png?quality=85" />
              <p className={classes.popularBeerDescription}>{beer.description}</p>
            </article>
          ))}
        </div>
      </section>
    </OnboardingScreen>
  )
}
