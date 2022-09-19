<template>
    <div>
        <h1>Feed</h1>
        <ul>
            <li v-for="post of feedArray"
            :key="post">
            {{ post.message }}</li>
        </ul>
    </div>
</template>

<script>
    export default{
        name: 'Global-Feed',

        computed: {
            feedArray(){
                return this.$store.state.feedList
            }
        }
    }
</script>