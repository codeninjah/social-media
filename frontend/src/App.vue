<template>
  <div id="app">
    <Feed />
    <Profile />
    <Login />
    <Register />
  </div>
</template>

<script>
import Profile from './views/Profile.vue'
import Feed from './views/Feed.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

export default {
  name: 'App',
  components: {
    Profile, Feed, Login, Register
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
