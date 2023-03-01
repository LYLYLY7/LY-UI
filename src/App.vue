<script setup lang="ts">
import First from './components/First.vue';
</script>

<template>
  <div>导航栏 |<router-link to="/">First</router-link>|
  <router-link to="/2">Second</router-link></div>
  <hr>
  <router-view/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
