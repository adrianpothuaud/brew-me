import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({

})

export default function OnboardingHeader() {
  return (
    <header>
      {/* left side brand logo */}
      <img alt="brand logo" src="/favicon-32x32.png" />
      {/* header nav */}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/beers">ALL BEERS</a>
          </li>
          <li>
            <a href="/champions">Beer Champions</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/gdpr">GDPR</a>
          </li>
        </ul>
      </nav>
      {/* right side user menu */}
      <nav>
        <ul>
          <li>
            <a href="/auth/login">Login</a>
          </li>
          <li>
            <a href="/auth/register?as=client">Create Client account</a>
          </li>
          <li>
            <a href="/auth/register?as=brewer">Create Brewer account</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
