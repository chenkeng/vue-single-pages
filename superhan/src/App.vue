<template>
  <div id="app">
    <div>
        <img class="logo" src="./assets/logo.png">
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
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo{
  width: 80px;
  height: 80px;
  border:4px solid #00c;
  border-radius: 50%;
  animation: move 4s infinite linear;
  animation-play-state:running;
}
.logo:hover{
  animation-play-state:paused;
  -webkit-animation-play-state:paused;
}
@keyframes move{
  0%{
    transform: rotate(0);
  }
    50%{
        transform: rotate(180deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.nav {
    display: flex;
    line-height: 2;
}
.nav a{
    flex: 1;
    text-decoration: none;
}
.router-link-exact-active{
    color:red;
    font-weight: bold;
}
a{
  color:black;
}
</style>
