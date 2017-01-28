import posts from '../../api/posts'

const state = {
    allPosts: []
}

const getters = {
    allPosts: state => state.allPosts
}

const actions = {
    fetchPosts ({ commit }) {
        posts.fetch().then(resp => commit('receivePosts', { posts: resp.data }))
    }
}

const mutations = {
    receivePosts (state, { posts }) {
        state.allPosts = posts
    }
}

export default { state, getters, actions, mutations }