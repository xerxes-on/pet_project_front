import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHomeStore = defineStore(
    'homeStore',
    () => {
        const trending = ref(null)
        const suggestions = ref(null)
        const images = () => {
            suggestions.value.map((book) => book.images)
        }

        return {
            trending,
            suggestions,
            images,
        }
    },
    { persist: true }
)
