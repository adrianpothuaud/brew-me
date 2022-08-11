import React from 'react'
import { createUseStyles } from 'react-jss'

import { flexRowBetweenCenter } from '../../styles'

const useStyles = createUseStyles({
  brandIcon: {
    height: 60,
    width: 60,
  },
  centerNav: {
    'display': 'flex',
    'flexDirection': 'row',
    '& ul': {
      'display': 'flex',
      'flexDirection': 'row',
      'justifyContent': 'space-around',
      'alignItems': 'center',
      'listStyleType': 'none',
      '& li': {
        'padding': 4,
      },
    },
  },
  header: {
    ...flexRowBetweenCenter,
  },
})

export default function OnboardingHeader() {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      {/* left side brand logo */}
      <img alt="brand logo" className={classes.brandIcon} src="/favicon-32x32.png" />
      {/* header nav */}
      <nav className={classes.centerNav}>
        <ul>
          <li>
            <a data-pw="home link" href="/">Home</a>
          </li>
          <li>
            <a data-pw="beers link" href="/beers">ALL BEERS</a>
          </li>
          <li>
            <a data-pw="champions link" href="/champions">Beer Champions</a>
          </li>
          <li>
            <a data-pw="about link" href="/about">About</a>
          </li>
          <li>
            <a data-pw="contact link" href="/contact">Contact</a>
          </li>
          <li>
            <a data-pw="gdpr link" href="/gdpr">GDPR</a>
          </li>
        </ul>
      </nav>
      {/* right side user menu */}
      <nav>
        <ul>
          <li>
            <a data-pw="login link" href="/auth/login">Login</a>
          </li>
          <li>
            <a data-pw="register as client link" href="/auth/register/client">Create Client account</a>
          </li>
          <li>
            <a data-pw="register as brewer link" href="/auth/register/brewer">Create Brewer account</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
