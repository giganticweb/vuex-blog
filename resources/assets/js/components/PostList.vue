<template>
    <div>
        <div v-for="post in posts">
            <h2>
                <router-link :to="'/post/' + post.id">
                    {{ post.title }} <small>{{ post.created_at }}</small>
                </router-link>
            </h2>

            <p>{{ post.excerpt }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['posts']
    }
</script>