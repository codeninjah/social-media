<template>
    <div>
        <h1>Profile view</h1>
        <h4>Messages</h4>

        <ul>
            <li v-for="post of updatePostsList"
            :key="post">{{ post }}</li>
        </ul>

        <textarea id="message"></textarea>
        <button @click="post()">Post this</button>

    </div>
</template>


<script>
import store from '@/store'

    export default{
        name: 'User-Profile',
        data(){ return{
            postsList: []
        }},
        methods: {
            post(){
                var msg = document.getElementById("message").value
                this.postsList.push(msg)

                //Sending message to the global feed
                store.dispatch('addToFeedList', msg)
            }
        },
        computed : {
            updatePostsList(){
                return this.postsList
            }
        }
    }
</script>