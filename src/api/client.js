import axios from 'axios'

const client = axios.create({
    baseURL: 'http://bookrating.test/api',
})

export default client
