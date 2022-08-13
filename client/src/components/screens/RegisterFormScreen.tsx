import React from 'react'
import { Helmet } from 'react-helmet-async'
import { createUseStyles } from 'react-jss'
import { LoremIpsum } from 'react-lorem-ipsum'
import { useParams } from 'react-router-dom'

import useRegistrationForm from '../../hooks/useRegistrationForm'
import capitalize from '../../string-utils/capitalize'
import OnboardingScreen from '../templates/OnboardingScreen'

const useStyles = createUseStyles({
  pageTitle: {

  },
})

export default function RegisterFormScreen() {
  const classes = useStyles()
  const params = useParams()
  const form = useRegistrationForm(params.asRole || 'unknown')

  return (
    <>
      <Helmet>
        <title>Brew Me | {capitalize(params.asRole || 'unknown')} registration</title>
      </Helmet>
      <OnboardingScreen>
        <h1 className={classes.pageTitle}>Register as {params.asRole || 'unknown'}</h1>
        <LoremIpsum p={1} />
        <form onSubmit={form.submitHandler}>
          <fieldset>
            <label>Name</label>
            <input
              autoComplete='name'
              data-pw="name field"
              onChange={form.nameChangeHandler}
              type="text"
              value={form.name}
            />
            {form.nameError && (
              <span className='field-error' data-pw="name error">{form.nameError}</span>
            )}
          </fieldset>
          <fieldset>
            <label>Username</label>
            <input
              autoComplete='username'
              data-pw="username field"
              onChange={form.usernameChangeHandler}
              type="text"
              value={form.username}
            />
            {form.usernameError && (
              <span className='field-error' data-pw="username error">{form.usernameError}</span>
            )}
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input
              autoComplete='email'
              data-pw="email field"
              onChange={form.emailChangeHandler}
              type="email"
              value={form.email}
            />
          </fieldset>
          <fieldset>
            <label>Phone number</label>
            <input
              autoComplete='tel-local'
              data-pw="phone number field"
              onChange={form.phoneNumberChangeHandler}
              type="tel"
              value={form.phoneNumber}
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input
              autoComplete='new-password'
              data-pw="password field"
              onChange={form.passwordChangeHandler}
              type="password"
              value={form.password}
            />
          </fieldset>
          <fieldset>
            <button
              data-pw="submit registration button"
              type="submit"
            >
              Register
            </button>
          </fieldset>
        </form>
      </OnboardingScreen>
    </>
  )
}
