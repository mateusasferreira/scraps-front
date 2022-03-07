import axios from "axios";
import localStorageService from "../localStorage";
import AuthService from "./api.auth";

const api = axios.create({
  baseURL: process.env.API_URL
});

api.defaults.headers.common['Authorization'] = `Bearer ${localStorageService.get('x-auth-token')}`

api.interceptors.response.use((res) => {
  return res
}, async (error) => {
  
  try {
    if(error.response.status !== 401) return Promise.reject(error)

    const refreshToken = localStorageService.get('x-refresh-token')

    if(!refreshToken) return Promise.reject(error)

    const {data} = await AuthService.refresh({token: refreshToken})

    localStorageService.set('x-auth-token', data.accessToken)
    localStorageService.set('x-refresh-token', data.refreshToken)

    return api(error.config)
  } catch (e) {
    return Promise.reject(error)
  }
})

export default api
