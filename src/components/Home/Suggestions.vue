<script setup>
import { VueperSlide, VueperSlides } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

defineProps({
    homeStore: {
        required: true,
    },
})
</script>

<template>
    <vueper-slides :bullets="false" :gap="2" :infinite="true" :slide-ratio="1 / 4" :visible-slides="3" autoplay
                   class="no-shadow h-full" duration="2000" fixed-height="300px">
        <vueper-slide v-for="book in homeStore.suggestions" :key="book.id" :image="book.images"
                      class="rounded-2xl" />
    </vueper-slides>
</template>

<style scoped></style>
