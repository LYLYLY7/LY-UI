<template>
  <div class="topNav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu">1</span>
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
  justify-content: center;
  align-items: center;
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

  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none //手机页面 隐藏菜单
    }
    > .logo {
      margin: 0 auto; //手机页面 logo居中
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>