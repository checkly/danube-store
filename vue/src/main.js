// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'
import { CoralogixRum } from '@coralogix/browser';

CoralogixRum.init({
  public_key: 'cxtp_E7INQlSTpQzlvIdRYdFnjnyHtgE0y4',
  application: 'checkly-danube-site',
  version: '0.0.9',
  coralogixDomain: 'EU2'
});



Vue.config.productionTip = false
Vue.use(VModal)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
