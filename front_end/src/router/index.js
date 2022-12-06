import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/MainPage'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import MainPage1 from '../components/MainPage1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/mainPage',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/mainPage1',
      name: 'MainPage1',
      component: MainPage1
    }
  ]
})
