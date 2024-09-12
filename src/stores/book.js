import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookStore = defineStore(
    'bookStore',
    () => {
        const book = ref(null)
        const resetStore = () => {
            book.value = null
        }

        return {
            book,
            resetStore,
        }
    },
    { persist: true }
)
