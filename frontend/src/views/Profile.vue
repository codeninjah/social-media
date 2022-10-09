<template>
    <div>
        <button @click="logOut()">Lout Out</button>
        <h1>Profile view</h1>
        {{ `Welcome ${getUser}` }}

        <h4>Wrote something</h4>

        <textarea id="message" v-model="publishPost.message"></textarea>
        <button @click="postPost()">Post this</button>


        <ul>
            <li v-for="post in getMyPosts"
            :key="post"> 
                <ol>
                    <li v-for="p in post"
                    :key="p">
                        {{ p.message }} U_id: {{ p.user_id}}
                    </li>
                </ol>
            </li>
        </ul>

        {{ getMyPosts.length }}


    </div>
</template>


<script>
//import store from '@/store'

//import store from '@/store'

    export default{
        name: 'User-Profile',
        data(){ return{
            publishPost: {
                message: "",
                user_id: 1,
            }
        }},

        mounted() {
                return this.$store.dispatch('getPosts', this.getUserId)
           
        },

        methods: {
            postPost(){
                var msg = document.getElementById("message").value
                this.publishPost.message = msg
                console.log("Published post is:" + this.publishPost.message)
                console.log("getUser.user_id is: " + this.getUserId)
                this.$store.dispatch('POST_POST', {
                    message: this.publishPost.message,
                    user_id: this.getUserId
                });
            },
            
            logOut(){
                console.log("Router is: " + this.$router)
                this.$store.dispatch('clearLocalStorage')
            },
            
        },
        computed : {
            
           getMyPosts(){
            console.log("CComputed returnerar: " + this.$store.getters.getMyPosts)
            return this.$store.getters.getMyPosts
           },
           
           /*
           getMyList(){
            return this.$store.dispatch('getPosts', this.getUserId)
           },
           */
           
           getUser(){
            return this.$store.getters.getUser
           },

           getUserId(){
            return this.$store.getters.getUserId
           }
        }
    }
</script>