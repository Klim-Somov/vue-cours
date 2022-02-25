import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import modal from './Plugins/ModalWindow'
import context from './Plugins/Context'
import vuetify from './Plugins/vuetify'

Vue.config.productionTip = false

Vue.use(modal)
Vue.use(context)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
