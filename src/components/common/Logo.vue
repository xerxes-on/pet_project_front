<script setup>
const props = defineProps({
    width: {
        type: String,
        default: '200px',
    },
    height: {
        type: String,
        default: '200px',
    },
})
</script>

<template>
    <div class="flex items-center mb-8">
        <img alt="logo" :width="props.width" :height="props.height" class="rounded-full" src="@/assets/images/logo.png" />
    </div>
</template>

<style scoped></style>
