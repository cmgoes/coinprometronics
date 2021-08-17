import axios from 'axios'

const service = axios.create({
  baseURL: "http://localhost:6004"
})

export default service