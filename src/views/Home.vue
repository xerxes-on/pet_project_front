<script setup>
import { ref, watch } from 'vue'
import Layout from '@/components/common/Layout.vue'

const count = ref(1)

watch(count, () => {
    if (count.value < 1) {
        count.value = 1
    }
})

// onMounted(()=>{
//     async ()=>{
//         const response = await
//     }
// })



</script>
<template>
    <Layout>

        <Home />

    </Layout>
</template>

<style scoped>

</style>
