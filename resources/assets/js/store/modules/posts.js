import posts from '../../api/posts'

const state = {
    posts: vuexBlog.initialState.posts,
    isFetching: false,
    hasFetched: false
}

const getters = {
    posts: state => state.posts,

    postsInCategory: state => (categoryId) => {
        return state.posts.filter(post => post.category_id == categoryId)
    },

    postFromId: state => (postId) => {
        return state.posts.find(post => post.id == postId)
    }
}

const actions = {
    fetchPosts ({ commit }) {
        commit('startFetchingPosts')

        posts.fetch().then(resp => commit('receivePosts', { posts: resp.data }))
    }
}

const mutations = {
    startFetchingPosts (state) {
        state.isFetching = true
    },

    receivePosts (state, { posts }) {
        state.posts = posts
        state.hasFetched = true
        state.isFetching = false
    }
}

export default { state, getters, actions, mutations }