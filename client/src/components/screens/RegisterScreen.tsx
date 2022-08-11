import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
// import { createUseStyles } from 'react-jss'
import { LoremIpsum } from 'react-lorem-ipsum'
import { useParams } from 'react-router-dom'

import OnboardingScreen from '../templates/OnboardingScreen'

const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


type RegistrationFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  username: string;
  password: string;
};

// const useStyles = createUseStyles({

// })

export default function RegisterScreen() {
  // const classes = useStyles()
  const params = useParams()
  const { register, handleSubmit } = useForm<RegistrationFormData>()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <>
      <Helmet>
        <title>Brew Me | {capitalizeFirst(params.asRole || 'unknown')} registration</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <OnboardingScreen>
        <LoremIpsum p={2} />
        <form onSubmit={onSubmit}>
          <fieldset>
            <label>Name</label>
            <input
              {...register('name')}
              data-pw="name field"
            />
          </fieldset>
          <fieldset>
            <label>Username</label>
            <input
              {...register('username')}
              data-pw="username field"
            />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input
              {...register('email')}
              data-pw="email field"
            />
          </fieldset>
          <fieldset>
            <label>Phone number</label>
            <input
              {...register('phoneNumber')}
              data-pw="phone number field"
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input
              {...register('password')}
              data-pw="password field"
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
