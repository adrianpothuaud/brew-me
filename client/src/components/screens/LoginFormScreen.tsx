import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { createUseStyles } from 'react-jss'
import { LoremIpsum } from 'react-lorem-ipsum'
import { useParams } from 'react-router-dom'

import { login } from '../../api-wrapper'
import capitalize from '../../string-utils/capitalize'
import OnboardingScreen from '../templates/OnboardingScreen'

type LoginFormData = {
  username: string;
  password: string;
};

const useStyles = createUseStyles({
  pageTitle: {

  },
})

export default function LoginFormScreen() {
  const classes = useStyles()
  const params = useParams()
  const { register: rhfRegister, handleSubmit } = useForm<LoginFormData>()

  const onSubmit = handleSubmit((data) => {
    console.log('submitting login form with', data)
    login({
      ...data,
      role: params.asRole || 'unknown',
    })
      .then((response) => {
        console.log('response from api', response.status)
      })
      .catch((e) => {
        console.log('axios error fetching api', e.message)
      })
  })

  return (
    <>
      <Helmet>
        <title>Brew Me | {capitalize(params.asRole || 'unknown')} registration</title>
      </Helmet>
      <OnboardingScreen>
        <h1 className={classes.pageTitle}>Register as {params.asRole || 'unknown'}</h1>
        <LoremIpsum p={1} />
        <form onSubmit={onSubmit}>
          <fieldset>
            <label>Username</label>
            <input
              {...rhfRegister('username')}
              autoComplete='username'
              data-pw="username field"
              type="text"
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input
              {...rhfRegister('password')}
              autoComplete='current-password'
              data-pw="password field"
              type="password"
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
