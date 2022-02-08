<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted(){
    // app.vue根组件只执行并挂载一次，在次请求数据，防止组件切换多次请求数据
    this.$store.dispatch('categoryList')
  }
};
</script>

<style>
</style>