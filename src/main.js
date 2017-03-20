// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueKindEditor from './plugins/vue-kindeditor'
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/themes/default/default.css'

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueKindEditor)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
