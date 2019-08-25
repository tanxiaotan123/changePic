import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.api = 'http://49.234.153.30'

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
