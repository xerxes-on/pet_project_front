<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { useHomeStore } from '@/stores/home.js'

const homeStore = useHomeStore()
</script>

<template>
    <vueper-slides :infinite="true" duration="2000" autoplay class="no-shadow h-full" :visible-slides="3" :gap="2" :bullets="false" :slide-ratio="1 / 4" fixed-height="300px">
        <vueper-slide v-for="book in homeStore.suggestions" :key="book.id" :image="book.images" class="rounded-2xl" />
    </vueper-slides>
</template>

<style scoped></style>
