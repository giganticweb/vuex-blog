import posts from '../../api/posts'

const state = vuexBlog.initialState.posts

const getters = {
    posts: state => state.posts,

    postsInCategory: state => (categoryId) => {
        return state.posts.filter(post => post.category_id == categoryId)
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