import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugins
import axios from 'axios'
import VueAxios from 'vue-axios'
    //loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap'
import jQuery from 'jquery'
//components


Vue.config.productionTip = false

window.$ = window.jQuery = jQuery

Vue.use(VueAxios, axios)
Vue.component('Loading',Loading);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')