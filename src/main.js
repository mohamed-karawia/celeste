import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://celeste-api.herokuapp.com/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
