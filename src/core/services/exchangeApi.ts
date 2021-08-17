import axios from 'axios'

const service = axios.create({
  baseURL: "http://localhost:6003"
})

export default service