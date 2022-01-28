import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
// 使用Vuex插件
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    search
  }
})