import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001'
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
