<template>
	<div class="han">
		<h1>Hello {{msg}}!</h1>
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
      msg: 'Welcome chenchaohan Vue.js App'
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