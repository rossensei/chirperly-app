<script setup>
import { RouterLink, RouterView } from 'vue-router';
import AppLayout from '@/layouts/AppLayout.vue'
</script>

<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
</template>