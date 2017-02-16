<template>
    <div>
        <ul>
            <li v-for="category in categories">
                <router-link :to="'/category/' + category.id">{{ category.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            categories () {
                return this.$store.getters.categories
            }
        }
    }
</script>