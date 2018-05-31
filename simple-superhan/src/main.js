import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)



new Vue({
  el: '#app',
  router,
 //template:'<App/>',
 // components : {App}
  render: h => h(App)
})
