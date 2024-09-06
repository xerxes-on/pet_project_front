<script setup>
import Logo from '@/components/common/Logo.vue'
import Svg from '@/components/common/Svg.vue'
import { ref, watch } from 'vue'

const count = ref(1)

watch(count, () => {
    if (count.value < 1) {
        count.value = 1
    }
})
</script>

<template>
    <div class="bg-primary min-h-screen p-4">
        <!-- Header -->
        <header class="flex items-center mb-6">
            <div class="flex items-center">
                <Logo width="70px" height="70px" class="mb-0" />
                <h1 class="text-xl ml-4 font-bold">LetsRate</h1>
            </div>
            <nav class="flex items-center">
                <a href="#" class="mx-2 text-blue-600 font-medium">Home</a>
                <a href="#" class="mx-2">My Books</a>
                <a href="#" class="mx-2">Community</a>
                <a href="#" class="mx-2">Contact Us</a>
                <img src="@/assets/images/logo.png" alt="User Avatar" class="w-8 h-8 rounded-full ml-4" />
            </nav>
        </header>

        <!-- Search Bar -->
        <div class="relative mb-6 flex justify-center p-5">
            <input type="text" placeholder="Search Your Books" class="w-1/2 h-fit rounded-full shadow-md" />

            <button class="absolute right-3 top-3"></button>
        </div>

        <!-- Main Content -->
        <div class="flex justify-around">
            <!-- Left Sidebar -->
            <div class="w-1/4 bg-primary_dark flex justify-between flex-col rounded-2xl shadow-md p-4 mr-4 border-1 border-dark_blue">
                <h2 class="text-lg font-bold mb-2 text-center">2024 READING CHALLENGE</h2>
                <p class="text-sm mb-4">Challenge Your Self to Read More This Year</p>
                <div class="bg-light_blue rounded-2xl p-4 mb-4">
                    <Svg name="home1" w="500px" h="500px" />
                    <p class="text-center font-medium">Reading Challenge</p>
                    <div class="flex justify-center items-center mt-2">
                        <button @click="count--" class="text-3xl font-bold mr-2">-</button>
                        <span class="text-2xl">{{ count }}</span>
                        <button @click="count++" class="text-3xl font-bold ml-2">+</button>
                    </div>
                    <p class="text-xs text-center mt-2">You Can Change Your Goal at Any Time</p>
                </div>
                <h3 class="font-bold mb-2 text-center">THE BOOK SHELVES</h3>
                <ul>
                    <li class="flex justify-between mb-1"><span>Want to Read</span><span>(0)</span></li>
                    <li class="flex justify-between mb-1"><span>Currently Reading</span><span>(0)</span></li>
                    <li class="flex justify-between"><span>Completed</span><span>(0)</span></li>
                </ul>
                <div class="flex mt-4 justify-between">
                    <a href="#" class="text-2xl"><i class="fa-brands fa-google"></i></a>
                    <a href="#" class="text-2xl"><i class="fa-brands fa-apple"></i></a>
                    <a href="#" class="text-2xl"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="text-2xl"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="text-2xl"><i class="fa-brands fa-x-twitter"></i></a>
                </div>
            </div>

            <!-- Main Content Area -->
            <div class="flex-1">
                <h2 class="text-xl font-bold mb-4 text-center">Trending Books</h2>
                <div class="grid grid-cols-2 gap-3 p-2 lg:grid-cols-3">
                    <div class="p-10 row-span-2 rounded-lg"></div>
                    <div class="p-10 col-span-2 rounded-lg shadow-lg"></div>
                    <div class="p-10 col-span-2 rounded-lg shadow-lg"></div>
                    <div class="p-10 rounded-lg shadow-lg"></div>
                    <div class="p-10 rounded-lg shadow-lg"></div>
                    <div class="p-10 rounded-lg shadow-lg"></div>
                </div>

                <h2 class="text-xl font-bold mb-4">Suggestions</h2>
                <div class="flex justify-between">
                    <!-- Repeat this block for each suggestion -->
                    <div class="bg-gray-800 rounded-lg p-4 text-white">
                        <Svg name="home4" />
                    </div>
                    <div class="bg-gray-800 rounded-lg p-4 text-white">
                        <Svg name="home5" />
                    </div>
                    <div class="bg-gray-800 rounded-lg p-4 text-white">
                        <Svg name="home6" />
                    </div>
                    <div class="bg-gray-800 rounded-lg p-4 text-white">
                        <Svg name="home7" />
                    </div>
                </div>
            </div>

            <!-- Right Sidebar -->
            <div class="w-1/4 bg-primary_dark rounded-lg shadow-md p-4 ml-4">
                <h2 class="text-lg font-bold mb-2 text-center">WELCOME TO LOGO NAME</h2>
                <p class="text-sm mb-4 text-center">Meet your favorite book, find your reading community, and manage your reading life.</p>
                <div class="bg-light_blue rounded-lg p-4 mb-4 flex flex-col justify-center">
                    <Svg name="home2" w="350px" h="300px" class="mx-5" />
                    <h3 class="font-bold text-center">LOGO NAME</h3>
                    <p class="text-center">CHOICE AWARD</p>
                    <p class="text-center text-2xl font-bold">2024</p>
                    <p class="text-center mt-2">Announcing the Best <br />Books of 2024</p>
                </div>
                <h3 class="font-bold mb-2 text-center">WORK WITH US</h3>
                <ul class="text-sm">
                    <li class="mb-1 text-center">Authors</li>
                    <li class="mb-1 text-center">Advertise</li>
                    <li class="text-center">Authors & Ads Blog</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
div,
header,
nav {
    border: 1px solid red;
}

header {
    justify-content: space-between;
}

nav {
    width: 50vw;
    justify-content: space-evenly;
}

input {
    height: 40px;
    padding-left: 20px;
}
</style>
