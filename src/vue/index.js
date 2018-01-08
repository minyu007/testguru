import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './store'
import App from './App'
import route from './route'
import * as VueGoogleMaps from 'vue2-google-maps'


import './lib/jquery.min.js'
import './lib/bootstrap.bundle.min.js'
import FastClick from 'fastclick'
// boot4
import '../css/bootstrap.min.css'
// import '../css/bootstrap-extend.css'
import '../css/pace.css'
import '../css/montserrat.css'
import '../css/styles2.css'
import '../css/perfect-scrollbar.css'
import '../css/feather.css'
// import '../css/material-design.min.css'
// import '../css/site.min.css'
// import '../css/chart.min.css'
// import '../css/chartist.css'
// import '../css/main.css'
// import '../css/icons.css'
Vue.use(Router)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})
Vue.config.debug = true
const router = new Router(route)
sync(store, router)
router.back = (target) => {
    console.log(target)
}

new Vue({
    router,
    store,
    ...App
}).$mount('#app')
FastClick.attach(document.body)
