import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';
import router from '../router/index'

import Home from './modules/home';
import Products from './modules/products';
import Categories from './modules/categories';
import Cart from './modules/cart';
import Wishlist from './modules/wishlist';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    showBackdrop: false,
    backdropComponent: 'login',
    loginButtonDetails: 'login',
    errorMessage : null
  },

  getters: {
    isAuthenticated (state) {
      return state.idToken !== null;
    },
    backdrop(state){
      return state.showBackdrop;
    },
    loginButton(state){
      return state.loginButtonDetails
    },
    backdropComponent(state){
      return state.backdropComponent
    },
    errorMessage(state){
      return state.errorMessage
    }
  },

  mutations: {
    authUser(state, token){
      state.idToken = token
    },
    clearAuthData (state) {
      state.idToken = null
    },
    showBackdrop(state, component){
      state.backdropComponent = component;
      state.showBackdrop = true;
    },
    hideBackdrop(state){
      state.showBackdrop = false
    },
    showError(state, message){
      state.loginButtonDetails = 'login';
      state.errorMessage = message;
    }
  },

  actions: {
    setLogoutTimer ({commit}, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
      }, expirationTime)
    },
    registerUser({state, commit, dispatch}, payload){
      state.loginButtonDetails = '<Spinner />'
      axios.put('/user/auth/regester', payload)
      .then(res => {
        console.log(res)
        commit('authUser', res.data.data.token);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + res.data.data.expiresIn);
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('expirationDate', expirationDate);
        state.showBackdrop = false;
        state.loginButtonDetails = 'login'
        dispatch('setLogoutTimer', res.data.data.expiresIn)
      })
      .catch(err => {
        console.log(err.response)
        commit('showError', err.response.data.message)
      })
    },

    facebookAuth(store, payload){
      axios.post('/user/auth/regester/facebook', payload)
      .then(res => console.log(res))
      .catch(err => console.log(err.response))
    },

    loginLocal({state, commit, dispatch}, payload){
      state.loginButtonDetails = '<Spinner />'
      axios.post('/user/auth/login/local', payload)
      .then(res => {
        console.log(res);
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.data.expiresIn);
        console.log(expirationDate)
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('expirationDate', expirationDate);
        commit('authUser', res.data.data.token)
        dispatch('setLogoutTimer', res.data.data.expiresIn)
        state.showBackdrop = false;
        state.loginButtonDetails = 'login'
        if(router.currentRoute.name === 'Login'){
          router.go(-1)
        }
      })
      .catch(err => {
        console.log(err.response)
        commit('showError', err.response.data.message)

      })
    },
    tryAutoLogin ({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = new Date(localStorage.getItem('expirationDate'))
      const now = new Date()
      
      if (now >= expirationDate) {
        return
      }else{
        commit('authUser', token)
      }
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
    Categories,
    Cart,
    Wishlist
  }
})
