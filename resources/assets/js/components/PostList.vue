<template>
    <div>
        <div v-for="post in posts">
            <h2>{{ post.title }} <small>{{ post.created_at }}</small></h2>
            <p>{{ post.excerpt }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['posts']
    }
</script>