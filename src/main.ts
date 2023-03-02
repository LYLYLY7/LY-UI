import {createApp} from 'vue';
import './style.scss';
import App from './App.vue';
import {createWebHashHistory, createRouter} from 'Vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/Switch.vue';
import Dialog from './components/Dialog.vue';
import Button from './components/Button.vue';
import Tab from './components/Tab.vue';



const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc},
    {path: '/doc/switch', component: Switch},
    {path: '/doc/button', component: Button},
    {path: '/doc/dialog', component: Dialog},
    {path: '/doc/tab', component: Tab},
  ]
});
const app = createApp(App);
app.use(router)
app.mount('#app');
