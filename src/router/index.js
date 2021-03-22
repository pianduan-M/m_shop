import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/home/Home'
import Category from 'views/category/Category'
import ShopCart from 'views/shopcart/ShopCart'
import Profile from 'views/profile/Profile'

import Detail from 'views/detail/Detail.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail',
    component: Detail
  }
]


const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
