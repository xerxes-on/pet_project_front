<script setup>
import { ref } from 'vue'
import Layout from '@/components/common/Layout.vue'
import UserInfo from '@/components/ProfileComponents/UserInfo.vue'
import UserReading from '@/components/ProfileComponents/UserReading.vue'
import UserStats from '@/components/ProfileComponents/UserStats.vue'
import LogoutButton from '@/components/ProfileComponents/LogoutButton.vue'

// Generate random heights for the statistics bars
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const getRandomHeight = () => `${Math.floor(Math.random() * 100) + 30}%`
</script>

<template>
    <Layout>
        <div class="bg-primary p-6">
            <div class="max-w-6xl mx-auto">
                <UserInfo/>
                <UserReading/>
                <UserStats/>
                <LogoutButton/>
            </div>
        </div>

    </Layout>
</template>


<style scoped>
/* Custom styles for the profile page can be added here */
</style>
