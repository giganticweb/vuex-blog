<template>
    <div>
        <category-list></category-list>
    
        <div v-if="isFetching">Loading...</div>

        <post-list v-if="hasFetched" :posts="posts"></post-list>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.fetchPosts()
        },

        methods: {
            fetchPosts() {
                this.$store.dispatch('fetchPosts');
            }
        },

        computed: {
            posts () {
                const id = this.$route.params.id

                return this.$store.getters.postsInCategory(id)
            },

            isFetching () {
                return this.$store.state.posts.isFetching
            },

            hasFetched () {
                return this.$store.state.posts.hasFetched
            }
        },

        watch: {
            '$route' () {
                this.fetchPosts()
            }
        }
    }
</script>