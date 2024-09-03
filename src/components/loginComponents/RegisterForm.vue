<script setup>
import Svg from "@/components/Svg.vue";
import {ref} from "vue";
const showPassword = ref(false);
</script>

<template>
    <div class="bg-light_blue w-full rounded-2xl p-4 py-10 mb-2 relative flex flex-col justify-center items-center">
        <h2 class="text-2xl font-bold mb-2">Welcome to LetsRate </h2>
        <p class="mb-6">Sign Up to Continue</p>
        <!--Form-->
        <form class="flex flex-col justify-center items-center w-full">
            <div class="mb-4 w-1/2">
                <input type="text" placeholder="Enter Name" class="w-full p-2 rounded-full"/>
            </div>
            <div class="mb-4 w-1/2">
                <input type="text" placeholder="Enter email" class="w-full p-2 rounded-full"/>
            </div>
            <div class="mb-4 relative w-1/2">
                <input
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Enter Password"
                    class="w-full p-2 rounded-full"/>
                <button
                    @click.prevent="showPassword = !showPassword"
                    class="absolute right-3 top-2.5">
                    <i class="fa-regular"
                       :class="showPassword ? 'fa-eye' : 'fa-eye-slash'"/>
                </button>
            </div>

            <div class="mb-4 relative w-1/2">
                <input
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Confirm Password"
                    class="w-full p-2 rounded-full"/>
                <button
                    @click.prevent="showPassword = !showPassword"
                    class="absolute right-3 top-2.5">
                    <i class="fa-regular"
                       :class="showPassword ? 'fa-eye' : 'fa-eye-slash'"/>
                </button>
            </div>
            <button class="w-1/4 bg-primary_dark text-black font-bold  rounded-full mb-4">
                Login
            </button>
        </form>

        <div class="text-center mb-4">
            <p class="text-sm mb-2">Sign up with </p>
            <div class="flex justify-center space-x-4">
                <a href="#" class="text-2xl"><i class="fa-brands fa-google"></i></a>
                <a href="#" class="text-2xl"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="text-2xl"><i class="fa-brands fa-apple"></i></a>
                <a href="#" class="text-2xl"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>

        <!-- Decorative elements -->
        <div class="absolute -top-8 right-4">
            <div class="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">
                <!-- Book icon placeholder -->
                <Svg name="login3" w="300px" h="300px"/>
            </div>
        </div>
        <div class="absolute bottom-12 left-10">
            <div class="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">
                <!-- Book icon placeholder -->
                <Svg name="login1" w="300px" h="300px"/>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>