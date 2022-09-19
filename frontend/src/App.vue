<template>
  <div id="app">
    <Feed />
    <Profile />
  </div>
</template>

<script>
import Profile from './views/Profile.vue'
import Feed from './views/Feed.vue'

export default {
  name: 'App',
  components: {
    Profile, Feed
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
