<template>
    <div>
        <category-filter></category-filter>
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