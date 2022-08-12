import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { createUseStyles } from 'react-jss'
import { LoremIpsum } from 'react-lorem-ipsum'
import { useParams, useNavigate } from 'react-router-dom'

import { register } from '../../api-wrapper'
import setAuthData from '../../auth-utils/setAuthData'
import capitalize from '../../string-utils/capitalize'
import OnboardingScreen from '../templates/OnboardingScreen'

type RegistrationFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  username: string;
  password: string;
};

const useStyles = createUseStyles({
  pageTitle: {

  },
})

export default function RegisterFormScreen() {
  const classes = useStyles()
  const navigate = useNavigate()
  const params = useParams()
  const { register: rhfRegister, handleSubmit } = useForm<RegistrationFormData>()

  const onSubmit = handleSubmit((data) => {
    console.log('submitting registration form with', data)
    register({
      ...data,
      role: params.asRole || 'unknown',
    })
      .then((response) => {
        console.log('response from api', response.status)
        if (response.status === 201 && response.data.user.id && response.data.token) {
          setAuthData(response.data.user.id, response.data.token, params.asRole || 'unknown')
          navigate(params.asRole + '/')
        } else {
          console.log('response is not 201')
        }
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
            <label>Name</label>
            <input
              {...rhfRegister('name')}
              autoComplete='name'
              data-pw="name field"
              type="text"
            />
          </fieldset>
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
            <label>Email</label>
            <input
              {...rhfRegister('email')}
              autoComplete='email'
              data-pw="email field"
              type="email"
            />
          </fieldset>
          <fieldset>
            <label>Phone number</label>
            <input
              {...rhfRegister('phoneNumber')}
              autoComplete='tel-local'
              data-pw="phone number field"
              type="tel"
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input
              {...rhfRegister('password')}
              autoComplete='new-password'
              data-pw="password field"
              type="password"
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
