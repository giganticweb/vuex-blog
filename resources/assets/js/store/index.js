import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import posts from './modules/posts'
import categories from './modules/categories'

export default new Vuex.Store({
    modules: { posts, categories }
})