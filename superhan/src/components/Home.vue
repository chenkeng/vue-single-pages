<template>
	<div class="home">
		<p>{{msg}}</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos necessitatibus vero earum deserunt mollitia magni nobis tempore quam modi sequi!</p>
	</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to home page !'
    }
  }
}
</script>

<style scoped>
.home{
	background-color: #d57744;
	 background: url(../assets/dasheng.jpg)no-repeat center center;
	 height: 80vh;
}
	ul{
		list-style: none;
	}
	ul>li {
		font-size: 20px;
		color:red;
	}
</style>