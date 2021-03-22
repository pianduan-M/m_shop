import axios from 'axios'

export default function request (config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  instance.interceptors.response.use(config => {
    const res = config.data
    return res
  })
  return instance(config)
}