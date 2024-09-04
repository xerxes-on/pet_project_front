<script setup>
import {RouterView} from 'vue-router'

const props = defineProps({
  errored: {
    type: String,
    default: 'We\'re sorry, we\'re not able to retrieve this information at the moment, please try back later'
  }
})
</script>

<template>

  <RouterView/>

  <div v-show="errored">
    <p>{{ props.errored }}</p>
  </div>

</template>


