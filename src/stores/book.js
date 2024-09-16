import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookStore = defineStore(
    'bookStore',
    () => {
        const book = ref(null)
        const reviews = ref(null)
        const quote = ref(null)
        const resetStore = () => {
            book.value = null
            reviews.value = null
            quote.value = null
        }
        return {
            book,
            reviews,
            quote,
            resetStore,
        }
    },
    { persist: true }
)
