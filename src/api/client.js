import axios from 'axios'
import { useAuthStore } from '@/stores/auth.js'

const client = axios.create({
    baseURL: 'http://bookrating.test/api',
})
client.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore()
        const token = authStore.token

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default client
