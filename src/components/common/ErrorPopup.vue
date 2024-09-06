<script setup>
import { onMounted, ref } from 'vue'
import IconClose from '@/components/icons/IconClose.vue'

const props = defineProps({
    message: {
        type: String,
        default: 'Error occurred please try again  ',
    },
})
const isVisible = defineModel({
    type: Boolean,
})
onMounted(() => {
    setTimeout(() => {
        isVisible.value = false
    }, 5000)
})

</script>

<template>
    <div
        class="absolute bg-red-50 border-s-4 border-red-500 p-4 dark:bg-red-800/30 w-1/2 rounded-xl top-5 right-2 z-30"
        role="alert"
        tabindex="-1"
        aria-labelledby="hs-bordered-red-style-label"
    >
        <div class="flex">
            <div class="shrink-0">
                <span
                    class="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400"
                >
              <IconClose @click="isVisible = false"/>
                </span>
            </div>
            <div class="ms-3">
                <h3
                    id="hs-bordered-red-style-label"
                    class="text-gray-800 font-semibold dark:text-white"
                >
                    Error!
                </h3>
                <p class="text-sm">
                    {{ props.message }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
