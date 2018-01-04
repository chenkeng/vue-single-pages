import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import About from '../components/About';
import User from '../components/about/User'
import Home from '../components/Home';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:'/about/:id',
      component:User
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
