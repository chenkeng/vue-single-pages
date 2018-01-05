<template>
 <div>
 	<Header></Header>
 	<div class="article_list">
 		<ul>
 			<li v-for="item in list">
 				<!-- <time v-text='item.create_at'></time> -->
 				<time v-text="$utils.goodTime(item.create_at)"></time>
 				<router-link :to="'/content/'+item.id">{{item.title}}	</router-link>
 			</li>
 		</ul>
 	</div>
 	<Footer></Footer>
 </div>
</template>
<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
	components:{Header,Footer},
	data(){
		return {
			list:[]
		}
	},
	created(){
		this.getData()
	},
  methods: {
		getData(){
			this.$api.get('topics',null,r=>{
				this.list=r.data
			})
		}
	}
}
</script>
<style>
li{
	line-height: 1.4;
}
time{
	display: inline-block;
	width: 200px;
}
.article_list{
	margin:auto;
}
</style>