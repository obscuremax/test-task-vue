import Vue from 'vue'
import Vuex from 'vuex'
import header from './modules/header'
import head from './modules/head'
import work from './modules/work'
import complex from './modules/complex'
import step from './modules/step'
import services from './modules/services'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
		header, head, work, complex, step, services
  }
})
