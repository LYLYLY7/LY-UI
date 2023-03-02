<template>
  <div>
    <TopNav/>
    <div class="content" v-if="asideVisible">
      <aside>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tab">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>主内容</main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  name: 'Doc',
  components: {TopNav},
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideTure') //获得App.vue传的变量
    console.log('Doc 获得边栏：'+ asideVisible?.value)
    return {asideVisible} // 要用v-if类似访问，需要return{}
  }
};
</script>

<style lang="scss" scoped>
aside {
  background: #fbd36a;
  width: 150px;


  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px){
    position: fixed;
    top: 0;
    left: 0;
    padding: 66px 16px 16px;
  }
}
</style>