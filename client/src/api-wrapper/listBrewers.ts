import axiosPromise from './axiosPromise'

export async function listBrewers() {
  return axiosPromise(
    'get',
    '/api/brewers',
    null,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}
