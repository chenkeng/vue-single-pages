<template>
  <div class="index">
   <div class="aboutme">
    <div class="message1">
      <p>About Me </p>
      <p> 喜欢动漫和科幻类的电影，超级有  <span class="point"> 想象力</span>；</p>
      <p>有着一个认真而又好学的<span class="point">态度 </span>~有着不输别人的<span class="point"> 耐心 </span>
      和<span class="point"> 细心度 </span>，做前端，是我做程序员的<span class="point">第一步</span>。</p>
    </div>
    <section class="message2">
      <div class="img"></div>
      <dl>
        <dt> Message:</dt>
        <dd>查/男/22/中国</dd>
        <dt> Education:</dt>
        <dd>天上人间学院 </dd>
        <dt> My Major:</dt>
        <dd>化工</dd>
        <dt> Email:</dt>
        <dd>chao@163.com</dd>
        <dt>My Website</dt>
        <dd>
          <a href="###" target="_blank">superxyz.com</a>
        </dd>
      </dl>
    </section>
    <section class="ss-style-boxes"></section>
    <div class="footadd"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  background-color: #0ca2ba;
}
h1,
h2 {
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
}
.message1{
  color: aliceblue;
}
.point{
  font-size: 1.5em;
  padding: 0 .1em;
  color: burlywood;
}
section.message2 {
    height: 26em;
    width: 100vw;
    margin-top: 1em;
    position: relative;
}
.message2 dl {
    display: inline-block;
    height: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0.6em;
    padding: .5em .5em 1em;
    background: rgba(225, 225, 225, .1);
    border-radius: 6px 0 6px 0;
}
.message2 dl dt {
    float: left;
    width: 8em;
    padding: 1.2em 1em .6em;
    margin-right: 0em;
    letter-spacing: .1em;
    font-size: 1em;
}
.message2 dl dd {
    padding: 1.2em 0 .6em;
    border-bottom: .11em dashed #fff;
    letter-spacing: .15em;
}
dl:before {
    right: 0;
    top: 0;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
}
dl:after {
    left: 0;
    bottom: 0;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
}
</style>
