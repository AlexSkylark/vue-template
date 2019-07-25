// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import SendDataService from '@/services/senddata-service'
import toast from '@/plugins/toaster'
import money from 'v-money'

Vue.prototype.$http = axios
Vue.prototype.$sendDataService = SendDataService

Vue.prototype.$toaster = toast

Vue.use(money, { precision: 2 })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
