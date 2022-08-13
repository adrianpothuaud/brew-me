import { CreateNewUserInput } from '@brew-me/services'
import { AxiosResponse } from 'axios'

import axiosPromise from './axiosPromise'

export type RegisterPayload = CreateNewUserInput & {
  role: string
}

export async function register(payload: RegisterPayload): Promise<AxiosResponse> {
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
