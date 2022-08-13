import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../api-wrapper'
import setAuthData from '../auth-utils/setAuthData'

export default function useLoginForm(role: string) {
  const navigate = useNavigate()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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
        }
      })
      .catch((e) => {
        console.log('axios error fetching api', e.message)
      })
  }

  return {
    username, usernameChangeHandler,
    password, passwordChangeHandler,

    submitHandler,
  }
}
