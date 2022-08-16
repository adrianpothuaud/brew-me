import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../api-wrapper'
import setAuthData from '../auth-utils/setAuthData'

export default function useLoginForm(role: string) {
  const navigate = useNavigate()

  const [username, setUsername] = useState<string>('')
  const [usernameError, setUsernameError] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  function usernameChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
    setUsername(e.target.value)
  }

  function passwordChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value)
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault()

    console.log('submitting login form')
    login({
      username,
      password,
      role,
    })
      .then((response) => {
        console.log('response from api', response.status)
        if (response.status === 200 && response.data.user && response.data.token) {
          setAuthData(response.data.user.id, response.data.token, role)
          navigate('/' + role + '/')
        } else {
          console.log('response is not 201')
          if (response.status === 400) {
            console.log('response is 400')
            if (response.data.details === 'username is missing') setUsernameError('field is required')
            else if (response.data.details === 'password is missing') setPasswordError('field is required')
            else setPasswordError('bad password')
          } else if (response.status === 404) {
            setUsernameError('not found')
          }
        }
      })
      .catch((e) => {
        console.log('axios error fetching api', e.message)
      })
  }

  return {
    username, usernameChangeHandler, usernameError,
    password, passwordChangeHandler, passwordError,

    submitHandler,
  }
}
