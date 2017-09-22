import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Navigation from '@/components/Navigation';
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
   	}
  ]
})
