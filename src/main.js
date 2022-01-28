import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入TypeNav组件
import TypeNav from './pages/Home/TypeNav'
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  router,
  // 注册仓库：组件实例身上会多出一个$store属性
  store,
  render: h => h(App),
}).$mount('#app')
