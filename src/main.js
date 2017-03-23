// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import WebFont from 'webfontloader'

Vue.config.productionTip = false

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}

WebFont.load({
  google: {
    families: ['Open+Sans:400,500,700']
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
