<template>
    <button @click="follow(author.data.id)" class="mt-2 bg-dark_blue text-white px-10 py-1 rounded-full text-sm hover:bg-light_blue">
        {{ author.isFollowed ? 'Unfollow' : 'Follow' }}
    </button>
</template>

<script setup>
import followApi from '@/api/follow.js'
import { useBookStore } from '@/stores/book.js'

defineProps({
    author: {
        required: true,
        type: Object,
    },
})
const bookStore = useBookStore()

const follow = async (id) => {
    try {
        const follow_response = await followApi.followAuthor(id)
        if (follow_response.status === 200) {
            bookStore.book.author.isFollowed = !bookStore.book.author.isFollowed
        } else {
            console.log(follow_response.data)
        }
    } catch (e) {
        console.log(e)
    }
}
</script>
