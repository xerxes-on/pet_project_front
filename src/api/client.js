import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'
import { useHomeStore } from '@/stores/home.js'
import { useBookStore } from '@/stores/book.js'


const router = useRouter()
const authStore = useAuthStore()
const homeStore = useHomeStore()
const bookStore = useBookStore()

const logout = () => {
    authStore.resetStore()
    homeStore.resetStore()
    bookStore.resetStore()
    router.push({ name: 'login' })
}
const client = axios.create({
    baseURL: 'http://bookrating.test/api',
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})

const { token } = storeToRefs(authStore)

client.interceptors.request.use(
    (config) => {
        if (token.value) {
            config.headers.Authorization = `Bearer ${token.value}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
client.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            logout()
        } else {
            console.log(error)
        }
        return Promise.reject(error)
    },
)
export default client
