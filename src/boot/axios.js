import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: 'https://snoanime.com/ns/api/new'
})
export default ({ Vue }) => {
  Vue.prototype.$axios = axios
}
export { axiosInstance }
