<script setup>
import { formatDate } from '@/utilities.js'
import { ref } from 'vue'
import likeApi from '@/api/like.js'
import FollowButton from '@/components/common/FollowButton.vue'

defineProps({
    reviews: {
        required: true,
    },
})
const liked = ref(false)

const like = async (review_id) => {
    try {
        const like_response = await likeApi.like_review(review_id)
        if (like_response.status === 200) {
            liked.value = true
        } else {
            console.log(like_response.data)
        }
    } catch (e) {
        console.log(e)
    }
}
const unlike = async (review_id) => {
    try {
        const like_response = await likeApi.unlike(review_id)
        if (like_response.status === 200) {
            liked.value = false
        } else {
            console.log(like_response.data.message)
        }
    } catch (e) {
        console.log(e)
    }
}
</script>

<template>
    <!-- Reader Reviews Section -->
    <div class="mt-12 p-6 rounded-2xl">
        <h2 class="text-7xl font-tangerine mb-4">Readers Reviews</h2>
        <div>
            <p class="text-gray">Displaying 1 - 10 of 68 reviews</p>
            <div v-for="(review, index) in reviews" :key="index" class="flex bg-primary p-4 rounded-xl shadow-sm space-x-4">
                <div class="w-1/4 text-center">
                    <div class="flex items-center justify-center">
                        <img :src="review.user.profile_picture" alt="User Avatar" class="w-36 h-32 rounded-full" />
                        <div class="mt-2">
                            <p class="font-semibold text-2xl">{{ review.user.name }}</p>
                            <p class="text-sm text-gray-500">{{ review.user.reviews }} Reviews</p>
                            <p class="text-sm text-gray-500">{{ review.user.followers }} Followers</p>
                        </div>
                    </div>
                    <div class="flex justify-center text-2xl items-center mt-2">
                        <span v-for="n in 5" :key="n">
                            <i :class="['text-yellow', n <= review.data.rating / 2 ? 'fa-solid fa-star' : 'fa-regular fa-star']"></i>
                        </span>
                    </div>
                    <!-- Follow Button -->
                    <div>
                        <FollowButton :whoToFollow="review.user.id" :status="review.user.is_followed" />
                    </div>
                </div>
                <div class="flex-1">
                    <p class="text-gray text-xl">{{ formatDate(review.data.created_at) }}</p>
                    <p class="mt-2 text-gray-800 text-sm leading-relaxed">
                        {{ review.data.comment }}
                    </p>
                    <div class="flex items-center justify-around w-1/2 space-x-4 mt-4">
                        <div class="flex items-center space-x-1">
                            <span class="mr-5">{{ review.data.likes }} Likes</span>
                            <button v-if="liked"
                                @click="like(review.data.id)">
                                <i class="fa-heart text-red text-xl animate__heartBeat fa-solid fa-regular']"></i>
                            </button>
                            <button v-else
                                @click="unlike(review.data.id)">
                                <i class="fa-heart text-red text-xl animate__heartBeat fa-regular "></i>
                            </button>
                        </div>
                        <div class="flex items-center space-x-1">
                            <i class="far fa-comment"></i>
                            <span>Comment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
