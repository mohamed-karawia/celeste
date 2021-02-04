import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

import Home from './modules/home'
import Products from './modules/products'
import Categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLogged: false
  },

  mutations: {
  },

  actions: {
    registerUser(store, payload){
      axios.put('/user/auth/regester', payload)
      .then(res => console.log(res))
      .catch(err => console.log(err.response))
    },

    facebookAuth(store, payload){
      axios.post('/user/auth/regester/facebook', payload)
      .then(res => console.log(res))
      .catch(err => console.log(err.response))
    },

    loginLocal(store, payload){
      axios.post('/user/auth/login/local', payload)
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
