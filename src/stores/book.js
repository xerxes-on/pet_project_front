import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookStore = defineStore(
    'bookStore',
    () => {
        const book = ref(null)


        return {
            book
        }
    },
    { persist: true }
)
