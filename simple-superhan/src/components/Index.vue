<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>常用链接</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Vue</a></li>
      <li><a href="https://www.baidu.com" target="_blank">百度</a></li>
      <li><a href="https://www.youku.com" target="_blank">优酷</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome YOU ！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration:none;
}
a:hover{
  color:red;
}
</style>
