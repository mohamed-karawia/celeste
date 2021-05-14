import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

import Home from './modules/home'
import Products from './modules/products'
import Categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
  },

  getters: {
    isAuthenticated (state) {
      return state.idToken !== null
    }
  },

  mutations: {
    authUser(state, token){
      state.idToken = token
    },
    clearAuthData (state) {
      state.idToken = null
    }
  },

  actions: {
    setLogoutTimer ({commit}, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
      }, expirationTime)
    },
    registerUser({commit, dispatch}, payload){
      axios.put('/user/auth/regester', payload)
      .then(res => {
        console.log(res)
        commit('authUser', res.data.data.token);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + res.data.data.expiresIn);
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch('setLogoutTimer', res.data.data.expiresIn)
      })
      .catch(err => console.log(err.response))
    },

    facebookAuth(store, payload){
      axios.post('/user/auth/regester/facebook', payload)
      .then(res => console.log(res))
      .catch(err => console.log(err.response))
    },

    loginLocal({commit, dispatch}, payload){
      axios.post('/user/auth/login/local', payload)
      .then(res => {
        console.log(res);
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.data.expiresIn);
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('expirationDate', expirationDate);
        commit('authUser', res.data.data.token)
        dispatch('setLogoutTimer', res.data.data.expiresIn)
      })
      .catch(err => console.log(err.response))
    },
    tryAutoLogin ({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }
      commit('authUser', token)
    },
    logout ({commit}) {
      commit('clearAuthData')
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
    }
  },

  modules: {
    Home,
    Products,
    Categories
  }
})
