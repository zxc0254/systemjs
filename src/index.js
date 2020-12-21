import Vue from 'vue'
import router from './router'
import store from './store'
// import './style.css'
import App from './App.vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import singleSpaVue from 'single-spa-vue'
import './set-public-path'

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        render(h) {
            return h(App)
        },
        router,
        store,
        el: '#main'
    }
})
export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount


// new Vue({
//   router,
//   store,
//   render: (h) => h(App)
// }).$mount('#main')
