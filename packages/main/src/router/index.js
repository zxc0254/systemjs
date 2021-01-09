import VueRouter from 'vue-router';
import Home from '../views/Home/index.vue'
import Vue from 'vue'

Vue.use(VueRouter)
export const routes = [
  {
    path: '/main',
    name: 'home',
    component: Home,
    meta: {
      title: '主页'
    }
  },
]
const router = new VueRouter({
  base: '/',
  mode: 'hash',
  routes,
});
export default router;
