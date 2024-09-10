import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useProfileStore = defineStore(
    'profileStore',
    () => {
        const user = ref(null)
        const books_status = {
            finished: computed(() => user.value?.user?.books?.filter((book) => book.pivot.status === 0) || []),
            reading: computed(() => user.value?.user?.books?.filter((book) => book.pivot.status === 1) || []),
            wantToRead: computed(() => user.value?.user?.books?.filter((book) => book.pivot.status === 2) || []),
        }
        return {
            user,
            books_status,
        }
    },
    { persist: true }
)
