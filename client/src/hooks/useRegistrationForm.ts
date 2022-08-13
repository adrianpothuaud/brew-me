import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { register } from '../api-wrapper'
import setAuthData from '../auth-utils/setAuthData'

export default function useRegistrationForm(role: string) {
  const navigate = useNavigate()

  const [name, setName] = useState<string>('')
  const [nameError, setNameError] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [phoneNumberError, setPhoneNumberError] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [usernameError, setUsernameError] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  function nameChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value)
  }

  function emailChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value)
  }

  function phoneNumberChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
    setPhoneNumber(e.target.value)
  }

  function usernameChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
    setUsername(e.target.value)
  }

  function passwordChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value)
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault()

    register({
      name,
      email,
      phoneNumber,
      username,
      password,
      role,
    })
      .then((response) => {
        console.log('response from api', response.status)
        if (response.status === 201 && response.data.user && response.data.token) {
          setAuthData(response.data.user.id, response.data.token, role)
          navigate('/' + role + '/')
        } else {
          console.log('response is not 201')
          if (response.status === 400) {
            console.log('response is 400')
            if (response.data.code && response.data.details === 'name is missing') setNameError('field is required')
            if (response.data.code && response.data.details === 'email is missing') setEmailError('field is required')
            if (response.data.code && response.data.details === 'phoneNumber is missing') setPhoneNumberError('field is required')
            if (response.data.code && response.data.details === 'username is missing') setUsernameError('field is required')
            if (response.data.code && response.data.details === 'password is missing') setPasswordError('field is required')
          }
        }
      })
      .catch((e) => {
        console.log('axios error fetching api', e.message)
      })
  }

  return {
    name, nameChangeHandler, nameError,
    email, emailChangeHandler, emailError,
    phoneNumber, phoneNumberChangeHandler, phoneNumberError,
    username, usernameChangeHandler, usernameError,
    password, passwordChangeHandler, passwordError,

    submitHandler,
  }
}
