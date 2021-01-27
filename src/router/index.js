import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Categories from '../views/Categories'
import Customize from '../views/Customize'
import AboutUs from '../views/AboutUs'
import Products from '../views/Products'
import Product from '../views/Product'
import Login from '../views/Login'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },

  {
    path: '/customize',
    name: 'Customize',
    component: Customize
  },

  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
