import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入mockServer.js
import '@/mock/mockServe'

// 导入TypeNav组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false


new Vue({
  router,
  // 注册仓库：组件实例身上会多出一个$store属性
  store,
  render: h => h(App),
}).$mount('#app')
