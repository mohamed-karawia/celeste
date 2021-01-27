import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

import Home from './modules/home'
import Products from './modules/products'
import Categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },

  mutations: {
  },

  actions: {
    registerUser(store, payload){
      axios.put('/user/auth/regester', payload)
      .then(res => console.log(res))
      .catch(err => console.log(err.response))
    }
  },

  modules: {
    Home,
    Products,
    Categories
  }
})
