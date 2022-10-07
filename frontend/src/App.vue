<template>
  <div id="app">
    <RegisterLogInView />
    <Feed />
    <Profile />
  </div>
</template>

<script>
import Profile from './views/Profile.vue'
import Feed from './views/Feed.vue'
import RegisterLogInView from './views/RegisterLogIn.vue'

export default {
  name: 'App',
  components: {
    Profile, Feed, RegisterLogInView
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
