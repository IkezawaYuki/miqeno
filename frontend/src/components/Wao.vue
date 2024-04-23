<script setup>
import { ref } from "vue";

import httpClient from "../service/httpClient.js";
const count = ref(0);

function handleClick() {
  console.log(httpClient.wao());
}
</script>

<template>
  <button @click="handleClick">wao</button>
</template>

<style scoped>

</style>