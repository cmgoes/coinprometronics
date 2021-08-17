import axios from 'axios'

const service = axios.create({
  baseURL: "http://localhost:6001"
})

export default service