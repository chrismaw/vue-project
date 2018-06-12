// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'mdbootstrap/js/mdb.min.js'
import 'mdbootstrap/css/mdb.min.css'
// import Staff from './assets/staff.jpg'

Vue.config.productionTip = false

// let img = document.createElement('img')
// img.src = require('./')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
