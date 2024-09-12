<template>
    <button v-if="isFollowing" @click="unFollow" class="mt-2 bg-dark_blue text-white px-10 py-1 rounded-full text-sm hover:bg-light_blue">Unfollow</button>
    <button v-else @click="follow" class="mt-2 bg-dark_blue text-white px-10 py-1 rounded-full text-sm hover:bg-light_blue">Follow</button>
</template>

<script setup>
import { ref } from 'vue'
import followApi from '@/api/follow.js'

const props = defineProps({
    whoToFollow: {
        required: true,
    },
    status: {
        required: true,
        type: Boolean,
    },
})

const isFollowing = ref(props.status)

const follow = async () => {
    try {
        const follow_response = await followApi.follow(props.whoToFollow)
        if (follow_response.status === 200) {
            isFollowing.value = true
        } else {
            console.log(follow_response.data.message)
        }
    } catch (e) {
        console.log(e)
    }
}
const unFollow = async () => {
    try {
        const follow_response = await followApi.unfollow(props.whoToFollow)
        if (follow_response.status === 200) {
            isFollowing.value = false
        } else {
            console.log(follow_response.data.message)
        }
    } catch (e) {
        console.log(e)
    }
}
</script>
