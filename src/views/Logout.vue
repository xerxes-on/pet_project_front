<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const router = useRouter()

onMounted(() => {
    const authStore = useAuthStore()
    authStore.resetStore()
    router.push('/login')
})
</script>

<template></template>

<style scoped></style>
