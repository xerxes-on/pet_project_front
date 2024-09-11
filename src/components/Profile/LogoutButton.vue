<script setup>
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const logout = () => {
    authStore.resetStore()
    router.push({ name: 'login' })
}
</script>

<template>
    <div class="flex justify-center">
        <button @click="logout" class="bg-dark_blue text-white px-6 py-2 rounded-lg">Logout</button>
    </div>
</template>

<style scoped></style>
