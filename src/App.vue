<template>
  <social-header></social-header>
  <main-header></main-header>
  <RouterView />
  <bottom></bottom>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import SocialHeader from './components/SocialHeader.vue'
import Bottom from './components/Bottom.vue'
</script>

<style scoped>
/* nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
} */
</style>
