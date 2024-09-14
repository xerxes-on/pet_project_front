<template>
    <!-- About the Author Section -->
    <section v-if="author" class="mt-12 flex relative p-6">
        <div class="absolute right-64 w-3/5 h-0.5 bg-dark_blue"></div>
        <span class="w-1/2"></span>
        <div class="w-2/3 relative py-14">
            <div class="flex flex-col justify-between">
                <div class="w-full h-16">
                    <img :src="author.data.author_picture" alt="Author Image" class="w-40 h-40 absolute top-10 -left-1/3 rounded-full object-cover" />
                </div>
                <div class="">
                    <div>
                        <h3 class="text-4xl font-bold mb-10">{{ author.data.name }}</h3>
                        <div>
                            <FollowAuthorButton :author="author" />
                        </div>
                    </div>
                    <p class="text-gray-600">
                        No.of Books: <span class="font-bold text-dark_blue text-xl">{{ author?.books_count }}</span>
                        &nbsp;|&nbsp; Followers:
                        <strong>{{ author.data.followers_count }}</strong>
                    </p>
                    <p class="text-gray-700 mt-2">
                        {{ author?.data.about_author }}
                    </p>
                </div>
                <button class="ml-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Follow</button>
            </div>
        </div>
        <div class="absolute -bottom-2 right-64 b-0 w-3/5 h-0.5 bg-dark_blue"></div>
    </section>
    <section class="p-4 flex justify-between w-full m-15 relative">
        <div class="mt-12 ml-5 w-1/3 p-6 rounded-2xl flex flex-col justify-around items-center">
            <h2 class="text-6xl font-tangerine font-bold mb-4">Rating & Reviews</h2>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User Avatar" class="w-24 h-24 rounded-full" />
            <h1 class="text-2xl">What Do You Think?</h1>
            <div class="flex justify-between">
                <div class="text-center">
                    <div class="flex items-center text-xl space-x-2">
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-gray-300"></i>
                        <i class="fas fa-star text-gray-300"></i>
                    </div>
                    <h1 class="pt-4 text-lg">Rate this Book</h1>
                </div>

                <button class="ml-10 mt-5 bg-dark_blue text-white h-fit p-2 px-4 rounded-2xl hover:bg-light_blue">Write a Review</button>
            </div>
        </div>
        <div class="absolute -bottom-2 right-64 b-0 w-3/5 h-0.5 bg-dark_blue"></div>

        <div class="mt-12 p-6">
            <h2 class="text-6xl font-tangerine mb-4 text-center">Community Reviews</h2>
            <div class="flex items-center mb-4">
                <div class="text-lg text-center">
                    <span v-for="n in 5" :key="n">
                        <i :class="['text-yellow m-2', n <= 4 ? 'fa-solid fa-star' : 'fa-regular fa-star']"></i>
                    </span>
                </div>
                <span class="ml-2 text-xl">4.5</span>
                <span class="ml-4 text-gray-500">(654 Ratings • 756 Reviews)</span>
            </div>
            <div class="w-full space-y-5">
                <div class="flex items-center" v-for="(rate, index) in rates" :key="index">
                    <div class="text-sm">
                        <span class="mr-1">{{ rate.star }}</span
                        >stars
                    </div>
                    <div class="w-full bg-gray h-2 rounded-full mx-2">
                        <div
                            class="bg-green h-2 rounded-full"
                            :style="{ width: rate.width }"
                            :class="[rate.star === 1 ? 'bg-red' : 'bg-green', rate.star === 2 ? 'bg-orange_dark' : 'bg-green']"
                        ></div>
                    </div>
                    <span class="text-sm">{{ rate.percent }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import 'animate.css'
import FollowAuthorButton from '@/components/Books/FollowAuthorButton.vue'

const rates = [
    { star: 5, width: '80%', percent: '80%' },
    { star: 4, width: '60%', percent: '60%' },
    { star: 3, width: '40%', percent: '40%' },
    { star: 2, width: '20%', percent: '20%' },
    { star: 1, width: '10%', percent: '10%' },
]

defineProps({
    author: {
        required: true,
        type: Object,
    },
})
</script>

<style scoped></style>
