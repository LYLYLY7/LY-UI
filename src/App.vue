<template>
  <router-view/>
</template>


<script setup lang="ts">
import {provide, ref} from 'vue';


const width = document.documentElement.clientWidth;  //获取屏幕宽度,pc端常显示边栏
//设置一个变量，通过bool值的改变，控制边栏的隐藏与出现
const asideVisible = ref(width <= 500 ? false : true);
provide('asideTure', asideVisible);  //将变量提供给子组件


</script>


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
