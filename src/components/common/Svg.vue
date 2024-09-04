<script setup>
import {defineProps, ref} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  w: {
    type: String,
    default: "200px",
  },
  h: {
    type: String,
    default: "200px",
  },
});

const imageSrc = ref("");

import(`@/assets/svgs/${props.name}.svg`)
    .then((module) => {
      imageSrc.value = module.default;
    })
    .catch((error) => {
      console.error("Failed to load SVG:", error);
    });
</script>

<template>
  <img
      v-if="imageSrc"
      :src="imageSrc"
      :alt="name"
      :style="{ maxWidth: props.w, maxHeight: props.h }"
  />


</template>

<style scoped>

</style>
