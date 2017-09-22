import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Navigation from '@/components/Navigation';
import Profile from '@/components/Profile'
import Gallery from '@/components/Gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/navigation',
    	name: 'Navigation',
    	component: Navigation
    },
   	{
   		path:'/profile',
   		name:'Profile',
   		component: Profile
   	},
    {
      path:'/gallery',
      name:'Gallery',
      component: Gallery
    }
  ]
})
