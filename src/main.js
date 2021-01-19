import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import VueAnalytics from 'vue-analytics';

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'G-G0Q2QTM5S7'
});

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue(); //bus de eventos global!

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


