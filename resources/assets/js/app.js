import Vue from 'vue'
import axios from 'axios'

axios.defaults.headers.common = { 'X-Requested-With': 'XMLHttpRequest' };

import store from './store'
import router from './router'

import CategoryFilter from './components/CategoryFilter'
Vue.component('category-filter', CategoryFilter)

new Vue({
    router,
    store
}).$mount('#app')