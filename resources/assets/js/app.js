import Vue from 'vue'
import axios from 'axios'

axios.defaults.headers.common = { 'X-Requested-With': 'XMLHttpRequest' }

import store from './store'
import router from './router'

import CategoryList from './components/CategoryList'
Vue.component('category-list', CategoryList)

import PostList from './components/PostList'
Vue.component('post-list', PostList)

new Vue({
    router,
    store
}).$mount('#app')