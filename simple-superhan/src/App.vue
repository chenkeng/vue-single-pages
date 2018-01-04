<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="nav">
        <router-link to="/">Index</router-link>
        <router-link to="/About">About</router-link>
        <router-link to="/Home">Home</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #42b983;
}
</style>
