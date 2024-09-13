<template>
    <button @click="like">
        <i :class="['fa-heart text-red text-xl', liked ? 'animate__heartBeat fa-solid' : 'fa-regular animate__backOutDown']"></i>
    </button>
</template>

<script setup>
import likeApi from '@/api/like.js'

const props = defineProps({
    review_id: {
        required: true,
        type: Number,
    },
})
const liked = defineModel({
    type: Boolean,
})
const like = async () => {
    try {
        const like_response = await likeApi.like_review(props.review_id)
        console.log(like_response)
        if (like_response.status === 200) {
            liked.value = !liked.value
        } else {
            console.log(like_response.data.message)
        }
    } catch (e) {
        console.log(e)
    }
}
</script>
