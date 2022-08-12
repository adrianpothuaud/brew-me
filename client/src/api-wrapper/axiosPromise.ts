import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export default async function axiosPromise(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  payload: Object | null,
  config: AxiosRequestConfig,
): Promise<AxiosResponse> {
  return new Promise<AxiosResponse>((resolve, reject) => {
    if (method.includes('et')) {
      axios[method](
        url,
        config,
      ).then((response) => {
        resolve(response)
      }).catch((e) => {
        if (e.response) resolve(e.response)
        else reject(e)
      })
    } else {
      axios[method](
        url,
        payload,
        config,
      ).then((response) => {
        resolve(response)
      }).catch((e) => {
        if (e.response) resolve(e.response)
        else reject(e)
      })
    }
  })
}
