import { CreateNewUserInput } from '@brew-me/services'

import axiosPromise from './axiosPromise'

export type RegisterPayload = CreateNewUserInput & {
  role: string
}

export async function register(payload: RegisterPayload) {
  return axiosPromise(
    'post',
    '/api/auth/register',
    payload,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}
