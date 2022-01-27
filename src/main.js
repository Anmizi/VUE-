import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入TypeNav组件
import TypeNav from './pages/Home/TypeNav'
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
