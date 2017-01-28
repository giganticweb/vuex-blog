import Vue from 'vue'
import axios from 'axios'

axios.defaults.headers.common = { 'X-Requested-With': 'XMLHttpRequest' };

import store from './store'

new Vue({
    el: '#app',
    store,

    mounted () {
        this.$store.dispatch('fetchPosts')
    },

    computed: {
        posts () {
            return this.$store.getters.allPosts
        }
    }
})