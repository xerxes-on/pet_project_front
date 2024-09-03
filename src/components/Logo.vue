<script setup>
import Image from "@/components/Image.vue";
const props = defineProps({
  width: {
    type: String,
    default: '200px'
  },
  height: {
    type: String,
    default: '200px'
  }
})
</script>

<template>
  <div class="flex items-center mb-8">
    <Image name="logo.png" :w="props.width" :h="props.height" class="rounded-full"/>
  </div>
</template>

<style scoped>

</style>