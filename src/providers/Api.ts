import axios from 'axios'
import User from './User'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

api.interceptors.request.use((config) => {
  const token = User.get().token

  config.headers.Authorization = 'Bearer ' + token

  return config
})

export default api
