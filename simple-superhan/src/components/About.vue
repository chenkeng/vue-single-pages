<template>
	<div class="han">
		<h1>Hello {{msg}}!</h1>
        <button @click="handleRouter">跳转到user</button>
		<ul>
			<li v-for="list in lists">{{list.item}}</li>
		</ul>
	</div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
        msg: 'welcome to about page!',
        lists:[
	        {'item':'html5'},
	        {'item':'css3'},
	        {'item':'javascript'}
        ]
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