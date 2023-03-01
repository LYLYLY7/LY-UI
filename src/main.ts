import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import {createWebHashHistory, createRouter} from 'Vue-router';
import First from './components/First.vue';
import Second from './components/Second.vue';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: First},
    {path: '/2', component: Second}
  ]
});
const app = createApp(App);
app.use(router)
app.mount('#app');
