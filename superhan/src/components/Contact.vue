<template>
  <div>
      <div class="container" style="">
				<div class="contact">
					<h1>Contact me</h1>
					<p>代码梦想未来</p>
					<p>注重效率，偏爱敏捷开发 喜欢尝试，期待新鲜事物</p>
					<p>前端即兴趣，兴趣即未来行路有良友，便是捷径</p>
					<p>带上我吧，一起看到更大的世界</p>
					<p class="glyphicon glyphicon-qrcode"></p>
					<ul class="app">
						<li>
							<a href="###">Q Q
								<span class="result">:&nbsp;411620052</span>
							</a>
							<!-- <div><img class="app_img" src="img/QQ.JPG"></div> -->
						</li>
						<li>
							<a href="###">微 信
								<span class="result">:&nbsp;411620052</span>
							</a>
							<!-- <div><img class="app_img" src="img/wx.JPG"></div> -->
						</li>
						<li>
							<a href="###" target="_blank">个人网站
								<span class="result">:&nbsp;xyz.com</span>
							</a>
						</li>
						<li>
							<a href="###">邮 箱
								<span class="result">:&nbsp;chao@163.com</span>
							</a>
							<!-- <div><img class="app_img" src="img/email.png"></div> -->
						</li>
					</ul>
				</div>
			</div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Welcome to contact page !'
    }
  }
}
</script>

<style scoped>
.container {
    background: url(../assets/hire.jpg)no-repeat center center;
}
.contact {
    background-color: rgba(0, 0, 0, 0.70);
    width: 100%;
    text-align: center;
    height: 100vh;
    background-size: cover;
}
</style>
