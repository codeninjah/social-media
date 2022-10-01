<template>

<form @submit.prevent="login">
    <h3>Login</h3>
    <label for="username">Username</label>
    <input
        type="text"
        id="username"
        v-model="user.username"
        required
    />
    <input
        type="password"
        id="password"
        v-model="user.password"
        required
    />
    <input type="submit" />
</form>

</template>


<script>
    export default{
        name: 'Login-View',
        data(){
            return {
                user: {
                    username: "",
                    password: ""
                }
            }
        },

        methods: {
            login(){
                this.$store.dispatch('userLogin', {
                    username: this.user.email,
                    password: this.user.password
                });
            },
        }
    }
</script>