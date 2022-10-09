<template>
    <div>

        <h2>TEST DATA</h2>
        <h3>Getter</h3>
        <ul>
            <li v-for="post of getterList"
            :key="post.message_id">
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

        mounted() {
            return this.$store.dispatch('getAllPosts')
        },

        computed: {
            feedArray(){
                return this.$store.state.feedList
            },

            getterList(){
                return this.$store.getters.getList
            },
          
            
        }
    }
</script>