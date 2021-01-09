import VueRouter from 'vue-router';
import Home from '../views/Home/index.vue'
import Vue from 'vue'
Vue.use(VueRouter)
export const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: '主页'
        }
    },
]
const router = new VueRouter({
    routes,
});
export default router;
