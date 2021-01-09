import Vue from 'vue'
import Vuex from 'vuex'
import {moduleHome} from  './home'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        home: moduleHome,
    }
})
export default store
