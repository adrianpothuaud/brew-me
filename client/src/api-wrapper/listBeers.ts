import axiosPromise from './axiosPromise'

export async function listBeers() {
  return axiosPromise(
    'get',
    '/api/beers',
    null,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}
