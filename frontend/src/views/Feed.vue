<template>
    <div>

        <h2>Feed</h2>
        <ul>
            <li v-for="post of getterList"
            :key="post.message_id">
            <ul>
                <li v-for="message of post"
                :key="message.message_id">
                {{ message.message }} Id for post is: {{ message.message_id }} And userID is {{ message.user_id }} Test: {{ getUsers.username}}
                </li>
            </ul>
        </li>
        </ul>

        USER STUFF:
        <ul>
            <li v-for="user of getUsers"
            :key="user.user_id"> Test {{ user }}
                <ul>
                    <li v-for="u of user"
                    :key="u"> {{ u }}
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
            this.$store.dispatch('getAllUsers')
            this.$store.dispatch('getAllPosts')
            //return this.$store.dispatch('getAllUsers')
        },

        methods: {
            
        },
        computed: {
            getterList(){
                return this.$store.getters.getList
            },     
            getUserByPostId(){
                return this.$store.getters.getUserByPostId
            },    
            getAllUsers(){
                return this.$store.getters.getUsers
            },
            getUsers(){
                return this.$store.getters.getUsersByPost()
            }
        }
    }
</script>


<style>
    ul {
        list-style-type: none;
    }
</style>