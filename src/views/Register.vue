<script setup>
import LoginForm from '@/components/loginComponents/LoginForm.vue'
import Svg from '@/components/common/Svg.vue'
import RegisterForm from '@/components/loginComponents/RegisterForm.vue'
import Image from '@/components/common/Image.vue'
import Logo from '@/components/common/Logo.vue'
</script>

<template>
    <div class="min-h-screen bg-primary flex flex-col items-center justify-center p-4">
        <div class="w-full max-w-screen-md flex flex-col items-center justify-center relative">
            <!-- Logo -->

            <!-- Register Card -->
            <RegisterForm />

            <p class="text-center">
                Already a user?
                <router-link to="{{ {name: 'login'} }}" class="text-blue-600 font-bold">Login</router-link>
            </p>
        </div>
        <!-- Decorative elements -->
        <div class="absolute bottom-0 left-0">
            <!-- Stack of books placeholder -->
            <Svg name="login4" w="350px" h="350px" />
        </div>
        <div class="absolute bottom-4 right-4">
            <!-- Person reading placeholder -->
            <Svg name="login2" w="450px" h="450px" />
        </div>
    </div>
</template>

<style scoped></style>
