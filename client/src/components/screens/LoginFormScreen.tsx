import React from 'react'
import { Helmet } from 'react-helmet-async'
import { createUseStyles } from 'react-jss'
import { LoremIpsum } from 'react-lorem-ipsum'
import { useParams } from 'react-router-dom'

import useLoginForm from '../../hooks/useLoginForm'
import capitalize from '../../string-utils/capitalize'
import OnboardingScreen from '../templates/OnboardingScreen'

const useStyles = createUseStyles({
  pageTitle: {

  },
})

export default function LoginFormScreen() {
  const classes = useStyles()
  const params = useParams()
  const form = useLoginForm(params.asRole || 'unknown')

  return (
    <>
      <Helmet>
        <title>Brew Me | {capitalize(params.asRole || 'unknown')} login</title>
      </Helmet>
      <OnboardingScreen>
        <h1 className={classes.pageTitle}>Login as {params.asRole || 'unknown'}</h1>
        <LoremIpsum p={1} />
        <form onSubmit={form.submitHandler}>
          <fieldset>
            <label>Username</label>
            <input
              autoComplete='username'
              data-pw="username field"
              onChange={form.usernameChangeHandler}
              type="text"
              value={form.username}
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input
              autoComplete='current-password'
              data-pw="password field"
              onChange={form.passwordChangeHandler}
              type="password"
              value={form.password}
            />
          </fieldset>
          <fieldset>
            <button
              data-pw="submit login button"
              type="submit"
            >
              Login
            </button>
          </fieldset>
        </form>
      </OnboardingScreen>
    </>
  )
}
