import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import {ValidationObserver,ValidationProvider,extend,localize} from "vee-validate";
Vue.component('ValidationProvider',ValidationProvider)
Vue.component('ValidationObserver',ValidationObserver)

import JSONVIEW from 'jsonvue-mobile'
import 'jsonvue-mobile/dist/components.esm.css'
Vue.config.productionTip = false;
Vue.use(JSONVIEW)
JSONVIEW.initValidate(extend,localize)
import './mock/index'
import { router } from './router/index'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
