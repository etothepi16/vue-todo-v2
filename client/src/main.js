import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Vuetify from 'vuetify';
import router from './router';
import store from './store/index';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Vuetify);
sync(store, router);

new Vue({
  router,
  store,
  render(h) {
    return h(App);
  },
}).$mount('#app');
