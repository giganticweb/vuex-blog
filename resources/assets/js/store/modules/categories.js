import categories from '../../api/categories'

const state = vuexBlog.initialState.categories

const getters = {
    categories: state => state.categories
}

const actions = {}
const mutations = {}

export default { state, getters, actions, mutations }