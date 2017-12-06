import Vue from 'vue';
import App from './App';
import router from './router';
import '@/assets/css/font-awesome.min.css';
import '@/assets/css/base.css';
import '@/assets/js/rem.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
