import posts from '../../api/posts'

const state = vuexBlog.initialState.posts

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
        posts.fetch().then(resp => commit('receivePosts', { posts: resp.data }))
    }
}

const mutations = {
    receivePosts (state, { posts }) {
        state.posts = posts
    }
}

export default { state, getters, actions, mutations }