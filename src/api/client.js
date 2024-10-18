import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'
import { useHomeStore } from '@/stores/home.js'
import { useBookStore } from '@/stores/book.js'
import { useReviewsStore } from '@/stores/reviews.js'
import { useProfileStore } from '@/stores/profile.js'



const authStore = useAuthStore()


const client = axios.create({
    baseURL: 'https://2b98-213-230-112-200.ngrok-free.app/' + 'api',
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
    () => {
        const router = useRouter()
        const authStore = useAuthStore()
        const homeStore = useHomeStore()
        const bookStore = useBookStore()
        const reviews = useReviewsStore()
        const profile = useProfileStore()
            authStore.resetStore()
            homeStore.resetStore()
            bookStore.resetStore()
            reviews.resetStore()
            profile.resetProfile()
            router.push({ name: 'login' })
    },
)
export default client
