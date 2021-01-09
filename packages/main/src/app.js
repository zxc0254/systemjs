import Vue from 'vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
// import './style.css'
import App from './App.vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import singleSpaVue from 'single-spa-vue'
// import './set-public-path'

// const vueLifecycles = singleSpaVue({
//   Vue,
//   handleInstance: vueInstance => {
//     console.log(vueInstance)
//   },
//   appOptions: {
//     router,
//     store,
//     el: "#main",
//     render(h) {
//       return h(App, {
//         props: {
//           // single-spa props are available on the "this" object. Forward them to your component as needed.
//           // https://single-spa.js.org/docs/building-applications#lifecyle-props
//           name: this.name,
//           mountParcel: this.mountParcel,
//           singleSpa: this.singleSpa,
//         },
//       });
//     },
//   },
// });
//
// export const bootstrap = vueLifecycles.bootstrap
//
//
// export const mount = props => vueLifecycles.mount(props).then(instance => {
//
//
// })
//
// export const unmount = vueLifecycles.unmount

//
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#main')
