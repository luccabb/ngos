import axios from 'axios'

const api = axios.create({
    baseURL: 'http://[2804:14c:36:a2e0:7886:cd6:7035:48a8]:3333' 
})

export default api;