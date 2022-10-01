<template>
<form @submit.prevent="register">
    <h3>Login</h3>
    <label for="username">Username</label>
    <input
        type="text"
        id="username"
        v-model="user.username"
        required
    />
    <label for="user_email">User email</label>
    <input
        type="email"
        id="user_email"
        v-model="user.user_email"
        required
    />
    <label for="password_hash">Password</label>
    <input
        type="password"
        id="password_hash"
        v-model="user.password_hash"
        required
    />
    <input type="submit"/>
</form>
</template>

<script>
    export default {
        name: "Register-View",

        data() {
            return {
                user: {
                    username: "",
                    user_email: "",
                    password_hash: "",
                    role: "user"
                }
            }
        },

        methods: {
            register() {
            this.$store.dispatch('registerUser', {
                    username: this.user.username,
                    user_email: this.user.user_email,
                    password_hash: this.user.password_hash,
                    role: this.user.role
                });
            }
        }
    }
</script>