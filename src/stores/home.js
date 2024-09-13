import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHomeStore = defineStore(
    'homeStore',
    () => {
        const trending = ref(null)
        const suggestions = ref(null)
        const images = () => {
            suggestions.value.map((book) => book.image)
        }
        const resetStore = () => {
            trending.value = null
            suggestions.value = null
        }
        return {
            trending,
            suggestions,
            images,
            resetStore,
        }
    },
    { persist: true }
)
