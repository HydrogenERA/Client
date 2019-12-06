import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'
//
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
//
// Vue.use(BootstrapVue)
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)


new Vue({
	render: h => h(App)
}).$mount('#app')
