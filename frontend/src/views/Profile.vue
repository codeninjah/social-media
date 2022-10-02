<template>
    <div>
        <h1>Profile view</h1>
        <h4>Messages</h4>

        <ul>
            <li v-for="post of updatePostsList"
            :key="post">{{ post }}</li>
        </ul>

        <textarea id="message" v-model="publishPost.message"></textarea>
        <button @click="postPost()">Post this</button>

    </div>
</template>


<script>
import store from '@/store'

    export default{
        name: 'User-Profile',
        data(){ return{
            postsList: [],
            publishPost: {
                message: "",
                user_id: 1
            }
        }},
        methods: {
            post(){
                var msg = document.getElementById("message").value
                this.postsList.push(msg)

                //Sending message to the global feed
                store.dispatch('addToFeedList', msg)
            },
            postPost(){
                var msg = document.getElementById("message").value
                this.publishPost.message = msg
                //this.publishPost.user_id = 1
                console.log("Published post is:" + this.publishPost)
                this.$store.dispatch('POST_POST', {
                    message: this.publishPost.message,
                    user_id: this.publishPost.user_id
                })
            }
        },
        computed : {
            updatePostsList(){
                return this.postsList
            }
        }
    }
</script>