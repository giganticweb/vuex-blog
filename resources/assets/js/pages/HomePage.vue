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
                return this.$store.getters.posts
            }
        }
    }
</script>