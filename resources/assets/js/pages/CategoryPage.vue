<template>
    <div>
        <category-list></category-list>
        <post-list :posts="posts"></post-list>
    </div>
</template>

<script>
    export default {
        computed: {
            posts () {
                const id = this.$route.params.id

                return this.$store.getters.postsInCategory(id)
            }
        }
    }
</script>