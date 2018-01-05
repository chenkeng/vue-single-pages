1. 环境搭建
	* node.js window直接下载安装包，mac brew install node
	* 检查 是否 安装成功
``` js
	node -v
	npm  -v
```

2. vue-cli vue脚手架安装
	* npm install -g vue-cli
	* vue -V 检查安装版本
	* 切换到准备建立项目的文件夹
	* vue init webpack vue-demo-cnodejs
	* project name,project description ,author直接按默认回车
	* vue build compiler 编译器，vue-router 按照默认 Y
	* vue eslint 选择 standard 标准的
	* unit 单元测试 和e2e tests 选择n 

3. 切换进入项目 
```js
	* cd vue-demo-cnodejs
	* npm install
	* npm run dev
```

4. standard 说明
	* 缩进使用两个空格。
	* 字符串使用单引号，用双引号只是为了避免转义单引号。
	* 无未使用变量，这能帮助发现大量的错误。
	* 不使用分号，这么做，没问题，真的！
	* 行首不能是 ( ，[  或 `  。 
	* 这是省略分号时唯一陷阱—— standard 自动为你检查。
	* 关键字后面放一个空格。if (condition) { ... }
	* 函数名字后面放一个空格。function name (arg) { ... }
	* 始终用 ===，不要用 ==。不过可以用 obj == null 检测 null || undefined。
	* 始终处理 node.js 回调的 err 参数。
	* 始终以 window 引用浏览器的全局变量。 document 和 navigator 除外。 
	* 这是为了防止使用浏览器那些命名糟糕的全局变量，比如 open, length, event 和 name。

5. 整个文件夹目录结构
```
├── README.md  // 项目说明文档
├── node_modules  // 项目依赖包文件夹
├── build   // 编译配置文件，一般不用管
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config  // 项目基本设置文件夹
│   ├── dev.env.js  // 开发配置文件
│   ├── index.js  // 配置主文件
│   └── prod.env.js  // 编译配置文件
├── index.html   // 项目入口文件
├── package-lock.json  // npm5 新增文件，优化性能
├── package.json  // 项目依赖包配置文件
├── src    // 我们的项目的源码编写文件
│   ├── App.vue  // APP入口文件
│   ├── assets  // 初始项目资源目录，回头删掉
│   │   └── logo.png
│   ├── components // 组件目录
│   │   └── Hello.vue // 测试组件，回头删除
│   ├── main.js // 主配置文件
│   └── router // 路由配置文件夹
│       └── index.js   // 路由配置文件
└── static // 资源放置目录
```
6. 开发主要在src 目录
```
├── App.vue // APP入口文件
├── api  // 接口调用工具文件夹
│   └── index.js  // 接口调用工具
├── components  // 组件文件夹，目前为空
├── config  // 项目配置文件夹
│   └── index.js // 项目配置文件
├── frame  // 子路由文件夹
│   └── frame.vue // 默认子路由文件
├── main.js  // 项目配置文件
├── page  // 我们的页面组件文件夹
│   ├── content.vue // 准备些 cnodejs 的内容页面
│   └── index.vue  // 准备些 cnodejs 的列表页面
├── router  // 路由配置文件夹
│   └── index.js  // 路由配置文件
├── style  // scss 样式存放目录
│   ├── base   // 基础样式存放目录
│   │   ├── _base.scss   // 基础样式文件
│   │   ├── _color.scss  // 项目颜色配置变量文件
│   │   ├── _mixin.scss  // scss 混入文件
│   │   └── _reset.scss  // 浏览器初始化文件
│   ├── scss   // 页面样式文件夹
│   │   ├── _content.scss  // 内容页面样式文件
│   │   └── _index.scss  // 列表样式文件
│   └── style.scss  // 主样式文件
└── utils     // 常用工具文件夹
    └── index.js  // 常用工具文件    
```
  
7. static 目录
```
├── css   // 放一些第三方的样式文件
├── font  // 放字体图标文件
├── image  // 放图片文件，如果是复杂项目，可以在这里面再分门别类
└── js   // 放一些第三方的JS文件，如 jquery  
```
8. App.vue 文件替换为
```vue
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "./style/style";
</style>
```
	* 入口，只有一个空的路由视窗，我们的项目的所有内容，都基于这个视窗来展现。
我们的样式，都将从 src/style/style.scss 这个文件中引用，因此，在 App.vue 这个文件中，直接引用 ./style/style 即可。
	**scss 中，引用文件，是可以省略 .scss 这个后缀名的。 并且，我们某个不用编译成 css 的文件，我们给文件命名为 _xxx.scss 其中，文件名前缀的下划线，也是可以省略的。 **

9. 安装sass 预编译
```js
npm install sass-loader -D
npm install node-sass -D
```

10. index.vue 和 content.vue 随便写点内容
11. 修改 router 下面的index.js 
```router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/content/:id',
      component: Content
    }
  ]
})
```
12. :id 是使用了动态路由匹配
	**我们的内容页面是要展示N条内容的，我们如何来区分这些内容呢，就是根据ID来进行区分。所以，这里使用了动态路由匹配。**

13. 切换到根目录  cpm run dev 应该能正常跑起来  
14. 安装axios 
	* npm install axios -D 
15. 编辑 src/api/indexjs
```js
// 配置API接口地址
var root = 'https://cnodejs.org/api/v1'
// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
 return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
 for (var key in o) {
   if (o[key] === null) {
     delete o[key]
   }
   if (toType(o[key]) === 'string') {
     o[key] = o[key].trim()
   } else if (toType(o[key]) === 'object') {
     o[key] = filterNull(o[key])
   } else if (toType(o[key]) === 'array') {
     o[key] = filterNull(o[key])
   }
 }
 return o
}
/*
 接口处理函数
 这个函数每个项目都是不一样的，我现在调整的是适用于
 https://cnodejs.org/api/v1 的接口，如果是其他接口
 需要根据接口的参数进行调整。参考说明文档地址：
 https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
 主要是，不同的接口的成功标识和失败提示是不一致的。
 另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

function apiAxios (method, url, params, success, failure) {
 if (params) {
   params = filterNull(params)
 }
 axios({
   method: method,
   url: url,
   data: method === 'POST' || method === 'PUT' ? params : null,
   params: method === 'GET' || method === 'DELETE' ? params : null,
   baseURL: root,
   withCredentials: false
 })
 .then(function (res) {
   if (res.data.success === true) {
     if (success) {
       success(res.data)
     }
   } else {
     if (failure) {
       failure(res.data)
     } else {
       window.alert('error: ' + JSON.stringify(res.data))
     }
   }
 })
 .catch(function (err) {
   let res = err.response
   if (err) {
     window.alert('api error, HTTP CODE: ' + res.status)
   }
 })
}

// 返回在vue模板中的调用接口
export default {
 get: function (url, params, success, failure) {
   return apiAxios('GET', url, params, success, failure)
 },
 post: function (url, params, success, failure) {
   return apiAxios('POST', url, params, success, failure)
 },
 put: function (url, params, success, failure) {
   return apiAxios('PUT', url, params, success, failure)
 },
 delete: function (url, params, success, failure) {
   return apiAxios('DELETE', url, params, success, failure)
 }
}
```

16. 修改 main.js
```
import Vue from 'vue'
import App from './App'
import router from './router'
/**************************/
// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api
/**************************/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
 el: '#app',
 router,
 template: '<App/>',
 components: { App }
})
```
17. src/page/index.vue 
```vue
<template>
 <div>index page</div>
</template>
<script>
export default {
 created () {
   this.$api.get('topics', null, r => {
     console.log(r)
   })
 }
}
</script>
```
	* 此时查看console面板能看到请求返回的数据

18. 配置webpack 将接口代理到本地
	* config/index.js 特别注意此处是根目录的config/index.js 
	* **切记不是改src/config/index.js**
```js
dev: {
  env: require('./dev.env'),
  port: 8080,
  autoOpenBrowser: true,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {
    '/api/v1/**': {
      target: 'https://cnodejs.org', // 你接口的域名
      secure: false,
      changeOrigin: false,
    }
  },
  cssSourceMap: false
}
 ```
 19. 由于之前将 src/api/index.js 地址写死了，此时需要修改为：
 ```js
 // 配置API接口地址
var root = '/api/v1'
```

20. 由于 eslint 检查的太严格，总是报错，故去掉eslint检查方法
```js
const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

/****改为下面的***/
// 方法一
const createLintingRule = () => ({})
// 方法二
// 找到根目录下面的 config文件夹，然后在 index.js 中  修改配置
useEslint: false,  // 将true 改为false 即可
```
21. 常见的 *.vue 文件
```vue
<template>
 <div>
   <Header></Header>
   <div class="article_list">
     <ul>
       <li></li>
     </ul>
   </div>
   <Footer></Footer>
 </div>
</template>
<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
 components: { Header, Footer },
 data () {
   return {
     list: []
   }
 },
 created () {
   this.getData()
 },
 methods: {
   getData () {
     this.$api.get('topics', null, r => {
       console.log(r)
     })
   }
 }
}
</script>
<style>
 .article_list {margin: auto;}
</style>
```