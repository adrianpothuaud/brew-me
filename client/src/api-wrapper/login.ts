import axiosPromise from './axiosPromise'

export type LoginPayload = {
  username: string
  password: string
  role: string
}

export async function login(payload: LoginPayload) {
  return axiosPromise(
    'post',
    '/api/auth/login',
    payload,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}
