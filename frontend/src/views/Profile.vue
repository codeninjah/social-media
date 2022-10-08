<template>
    <div>
        <button @click="logOut()">Lout Out</button>
        <h1>Profile view</h1>
        {{ `Welcome ${getUser}` }}

        <h4>Wrote something</h4>

        <textarea id="message" v-model="publishPost.message"></textarea>
        <button @click="postPost()">Post this</button>


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
        methods: {
            postPost(){
                var msg = document.getElementById("message").value
                this.publishPost.message = msg
                console.log("Published post is:" + this.publishPost.message)
                this.$store.dispatch('POST_POST', {
                    message: this.publishPost.message,
                    user_id: this.publishPost.user_id
                });
            },
            
            logOut(){
                console.log("Router is: " + this.$router)
                this.$store.dispatch('clearLocalStorage')
            },
            
        },
        computed : {
           getMyList(){
            return this.$store.getters.getMyList
           },
           
           getUser(){
            return this.$store.getters.getUser
           },
        }
    }
</script>