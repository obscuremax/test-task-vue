import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/scss/style.scss'
import Button from '@/components/Button'
import List from '@/components/List'
import ListItem from '@/components/ListItem'

Vue.config.productionTip = false
Vue.component('Button', Button)
Vue.component('List', List)
Vue.component('ListItem', ListItem)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
