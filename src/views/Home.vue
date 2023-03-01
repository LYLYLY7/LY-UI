<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>LY UI</h1>
      <h2>一款普通的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/">Github</a>
        <router-link to="/doc">开始</router-link>
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
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fac5b2;
  padding: 100px 0;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: 14px;
      padding: 0 8px;
      background: white;
    }
  }
}
</style>