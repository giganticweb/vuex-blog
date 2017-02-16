import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomePage from '../pages/HomePage.vue'
import CategoryPage from '../pages/CategoryPage.vue'

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/', component: HomePage },
        { path: '/category/:id', component: CategoryPage }
    ]
})