<template>
  <div class="topNav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'TopNav',
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideTure'); //获得App.vue传的变量
    console.log('TopNav 获得边栏：' + asideVisible.value);
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleMenu}; // 要用@click类似访问，需要return{}
  }

};
</script>

<style lang="scss" scoped>
.topNav {
  background: #fea4b2;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
}
</style>