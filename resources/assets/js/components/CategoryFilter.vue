<template>
    <div>
        <ul>
            <li v-for="category in categories">
                {{ category.name }}
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