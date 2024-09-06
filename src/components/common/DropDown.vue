<script setup>

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
})
</script>
<template>
    <div
        class="absolute top-full left-0  w-40 bg-primary_dark shadow-md rounded-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
        <a
            v-for="item in items"
            :key="item"
            href="#"
            class="block px-4 py-2 hover:bg-gray-100"
        >
            {{ item }}
        </a>
    </div>
</template>



<style scoped>
/* Any specific styles */
</style>
