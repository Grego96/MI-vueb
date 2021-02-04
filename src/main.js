import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import VueAnalytics from 'vue-analytics';

require('vue2-animate/dist/vue2-animate.min.css')

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-187628358-2'
});

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue(); //bus de eventos global!

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


