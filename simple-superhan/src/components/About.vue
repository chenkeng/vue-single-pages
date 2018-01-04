<template>
	<div class="han">
		<h1>Hello {{msg}}!</h1>
        <button @click="handleRouter">跳转到user</button>
		<ul>
			<li>HTML5</li>
			<li>CSS3</li>
			<li>JAVASCRIPT</li>
		</ul>
	</div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'welcome to about page!'
    }
  },
    methods:{
      handleRouter(){
          this.$router.push('/about/user');
      }
    }
}
</script>
<style scoped>
	ul{
		list-style: none;
	}
	ul>li {
		font-size: 20px;
		color:red;
	}
</style>