import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore(
    'authStore',
    () => {
        const user = ref(null)
        const token = ref('')

        const resetStore = () => {
            user.value = null
            token.value = ''
        }
        const setUser = (newUser) => {
            user.value = newUser
        }
        const isAuthorized = computed(() => !!user.value)

        const setToken = (newToken) => {
            token.value = newToken
        }
        return {
            user,
            token,
            setUser,
            setToken,
            resetStore,
            isAuthorized,
        }
    },

    { persist: true }
)
