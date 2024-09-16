<script setup>
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
</script>

<template>
    <div class="flex justify-center">
        <button @click="logout" class="bg-dark_blue text-white px-6 py-2 rounded-lg">Logout</button>
    </div>
</template>

<style scoped></style>
