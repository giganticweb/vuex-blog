import posts from '../../api/posts'

const state = {
    posts: []
}

const getters = {
    posts: state => state.posts
}

const actions = {
    fetchPosts ({ commit }) {
        posts.fetch().then(resp => commit('receivePosts', { posts: resp.data }))
    }
}

const mutations = {
    receivePosts (state, { posts }) {
        state.posts = posts
    }
}

export default { state, getters, actions, mutations }