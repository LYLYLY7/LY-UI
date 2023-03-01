<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>LY UI</h1>
      <h2>一款普通的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/">Github</a>
        <a href="https://bilibili.com/">开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  name: 'Home.vue',
  components: {TopNav}
};
</script>

<style lang="scss" scoped>

</style>