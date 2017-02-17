<template>
    <div>
        <category-list></category-list>

        <h1>{{ post.title }}</h1>
        <h2>{{ post.created_at }}</h2>

        <div v-html="post.body"></div>
    </div>
</template>

<script>
    export default {
        computed: {
            post () {
                const id = this.$route.params.id

                return this.$store.getters.postFromId(id)
            }
        }
    }
</script>