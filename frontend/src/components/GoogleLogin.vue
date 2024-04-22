<script setup lang="ts">
import { onMounted } from "vue"
import { googleOneTap } from "vue3-google-login";

onMounted(() => {
  googleOneTap()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
})


</script>

<template>
  <div>One-Tap prompt will be shown once this component is mounted</div>
</template>

<style scoped>

</style>