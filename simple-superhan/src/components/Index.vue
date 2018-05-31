<template>
<div id="myApp">
  <pre>
    {{content}}
  </pre>

  <h1 class="myclass">superhan</h1>
</div>

</template>
<script>

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
export default {
  name: "myApp",
  data() {
    return {
      content:""
    };
  },
  mounted(){
    this.axios.post('http://api.komavideo.com/news/list').then(body=>{
      this.content=body.data;
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
  text-decoration: none;
}
a:hover {
  color: red;
}
</style>
