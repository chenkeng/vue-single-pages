import Vue from 'vue';
import Router from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from '../components/Index';
import About from '../components/About';
import User from '../components/about/User'
import Home from '../components/Home';
import Chen from '../components/Chen';
import Player from "../components/Player"
import PlayerProfile from "../components/Profile"
import PlayerStatus from "../components/Status"


import SettingDetail from '../components/setting/Detail'
import SettingHeader from '../components/setting/Header'
import SettingSidebar from '../components/setting/Sidebar'





Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    components: {
      myHeader: SettingHeader,
      mySidebar: SettingSidebar,
      myDetail: SettingDetail
    }
  }, 
  {
    path: '/player/:uid',
    name: 'Player',
    component: Player,
    children:[
      {
        path:'profile',
        component:PlayerProfile
      },
      {
        path:'status',
        component:PlayerStatus
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/about/:id',
    component: User
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/chen',
    name: 'Chen',
    component: Chen
  },
  {
    path: '*',
    redirect: '/index'
  }
  ]
})
