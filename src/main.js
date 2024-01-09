import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import {ValidationObserver,ValidationProvider,extend,localize} from "vee-validate";
Vue.component('ValidationProvider',ValidationProvider)
Vue.component('ValidationObserver',ValidationObserver)
// import JSONVIEW from '../../../jsonvue/dist/components.esm.js'
// import '../../../jsonvue/dist/components.esm.css'

import JSONVIEW from 'jsonvue-mobile'
import 'jsonvue-mobile/dist/components.esm.css'
// console.log(JSONVIEW)
Vue.config.productionTip = false;
Vue.use(JSONVIEW)
JSONVIEW.initValidate(extend,localize)
import './mock/index'
new Vue({
  render: h => h(App),
}).$mount('#app')
