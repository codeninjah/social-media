<template>
    <div>
        <h1>Feed</h1>
        <ul>
            <li v-for="post of feedArray"
            :key="post">
            {{ post.message }}</li>
        </ul>

        <h2>TEST DATA</h2>
        <ul>
            <li v-for="(post, index) of feed"
            :key="index"> {{ post[index].message }}
        </li>
        </ul>
        <h3>Test</h3>
        {{ testLista }}
    </div>
</template>

<script>
    export default{
        name: 'Global-Feed',

        methods: {
            baraTest(){
                return this.$store.dispatch('getAllPosts')
            },
        
        },

        computed: {
            feedArray(){
                return this.$store.state.feedList
            },
            
            testLista(){
                //console.log(this.$store.state.list)
                return this.$store.dispatch('getAllPosts')
            },

            feed(){
                return this.$store.state.list
            }
            
        }
    }
</script>