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
            <li v-for="post of feed"
            :key="post">{{ post }}
                <ol>
                <li v-for="message of post"
                :key="message">{{ message.message }}</li>
                </ol>
        </li>
        </ul>
        <h3>Test</h3>
        {{ testLista }}
        <h3>Getter</h3>
        <ul>
            <li v-for="post of getterList"
            :key="post.message_id">
            {{ post }}
            <ul>
                <li v-for="message of post"
                :key="message.message_id">
                {{ message.message }}
                </li>
            </ul>
        </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name: 'Global-Feed',

        methods: {
        
        },

        computed: {
            feedArray(){
                return this.$store.state.feedList
            },

            getterList(){
                return this.$store.getters.getList
            },
          
            
            testLista(){
                return this.$store.dispatch('getAllPosts')
            },
            

            feed(){
                console.log(this.$store.state.list)
                return this.$store.state.list
            }
            
        }
    }
</script>