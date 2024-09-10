import axios from 'axios'

const client = axios.create({
    baseURL: 'http://bookrating.test/api',
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

export default client
