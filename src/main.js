import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fa from './components/globals/Fa.vue';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';

Vue.use(VueLodash, { name: 'custom', lodash: lodash });

Vue.config.productionTip = false;

Vue.component('fa', fa);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
