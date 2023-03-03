<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

onMounted(async()=>{
  const getapp = await axios.get("health");
});
</script>

<template>
<main>
  <RouterView />
</main>
</template>
