import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookStore = defineStore(
    'bookStore',
    () => {
        const book = ref(null)
        const reviews = ref(null)
        const resetStore = () => {
            book.value = null
        }

        return {
            book,
            reviews,
            resetStore,
        }
    },
    { persist: true }
)
