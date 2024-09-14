<template>
    <button @click="like">
        <i :class="['fa-heart text-red text-xl', liked ? 'animate__heartBeat fa-solid' : 'fa-regular animate__backOutDown']"></i>
    </button>
</template>

<script setup>
import likeApi from '@/api/like.js'
import { useToast } from 'vue-toastification'

const toast = useToast()

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
        if (like_response.status === 200) {
            liked.value = !liked.value
        } else {
            toast.error('Please try again!')
            console.log(like_response.data.message)
        }
    } catch (e) {
        console.log(e)
    }
}
</script>
