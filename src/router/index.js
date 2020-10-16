import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter :(to,from,next) =>{
      next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('../views/Post.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/about/:id',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

let falg = true

//全局前置守卫,拦截路由
router.beforeEach((to,from,next)=>{
  //console.log('open Login...');
  if(falg){
    if(to.name === 'Login') next('/')
    else next()
  }else{
    if(to.name === 'Login') next()
    else next('/login')
  }
})

//全局后置钩子
router.afterEach((to,from)=>{
  //console.log('close Login...');
})

export default router
