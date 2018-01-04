<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/logo.png">
    </div>

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
.logo img{
  width: 80px;
  height: 80px;
  border:4px solid green;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-animation: moveRotate 4s infinite linear;
  -o-animation: moveRotate 4s infinite linear;
  animation: moveRotate 4s infinite linear;
}
.logo img:hover{
  animation-play-state: paused;
}
@keyframes moveRotate {
  0%{
    transform: rotate(0);
  }
  100%{
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
    }
}
.nav {
    display: flex;
}
.nav a{
    flex: 1;
    line-height: 2;
    color:black;
}
.nav .router-link-exact-active{
    color:red;
    font-weight: bold;
}
a {
  color: #42b983;
}
</style>
